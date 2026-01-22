import { useMutation } from "@tanstack/react-query";
import { useLightRpc } from "./useLightRpc";
import {
  ComputeBudgetProgram,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import {
  deriveAddress,
  deriveAddressSeed,
  getDefaultAddressTreeInfo,
  PackedAccounts,
  selectStateTreeInfo,
  SystemAccountMetaConfig,
} from "@lightprotocol/stateless.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSolphoneProgramInstance } from "./useSolphoneProgramInsrance";
import { useConnection } from "./useConnection";
import { useToast } from "./useToast";
const countryCode = "+91";

export const useClaimNumber = () => {
  const lightRpc = useLightRpc();
  const { publicKey, sendTransaction } = useWallet();
  const { program } = useSolphoneProgramInstance();
  const connection = useConnection();
  const { showToast } = useToast();

  return useMutation({
    mutationKey: ["claim-number"],
    mutationFn: async (number: string) => {
      if (!publicKey || !program) throw Error("Wallet not connected");

      const [settingsPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("phone_number_settings")],
        program.programId,
      );
      const [centralStatePda] = PublicKey.findProgramAddressSync(
        [Buffer.from("solnumber_central")],
        program.programId,
      );

      const addressTreeInfo = getDefaultAddressTreeInfo();
      const stateTreeInfos = await lightRpc.getStateTreeInfos();
      const outputStateTreeInfo = selectStateTreeInfo(stateTreeInfos);

      const addressSeed = deriveAddressSeed(
        [
          Buffer.from("phone_number"),
          Buffer.from(countryCode),
          Buffer.from(number),
        ],
        program.programId,
      );
      const phoneNumberAddress = deriveAddress(
        addressSeed,
        addressTreeInfo.tree,
      );

      try {
        const existingNumber = await lightRpc.getCompressedAccount(
          Array.from(phoneNumberAddress.toBytes()),
        );
        if (existingNumber && existingNumber.data) {
          throw Error("Number is already taken");
        }
      } catch {
        console.log("Phone number doesn't exist, proceeding with purchase");
      }

      const proof = await lightRpc.getValidityProofV0(
        [],
        [
          {
            address: Array.from(phoneNumberAddress.toBytes()),
            tree: addressTreeInfo.tree,
            queue: addressTreeInfo.queue,
          },
        ],
      );

      const systemAccountConfig = SystemAccountMetaConfig.new(
        program.programId,
      );
      const remainingAccounts =
        PackedAccounts.newWithSystemAccounts(systemAccountConfig);
      remainingAccounts.insertOrGet(publicKey);

      const addressTreeIndex = remainingAccounts.insertOrGet(
        addressTreeInfo.tree,
      );
      const addressQueueIndex = remainingAccounts.insertOrGet(
        addressTreeInfo.queue,
      );

      const packedAddressTreeInfo = {
        rootIndex: proof.rootIndices[0],
        addressMerkleTreePubkeyIndex: addressTreeIndex,
        addressQueuePubkeyIndex: addressQueueIndex,
      };

      const outputTreeIndex = remainingAccounts.insertOrGet(
        outputStateTreeInfo.tree,
      );
      const [treasuryPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("treasury")],
        program.programId,
      );
      const instructions = [
        ComputeBudgetProgram.setComputeUnitLimit({ units: 1_400_000 }),
        await program.methods
          .buyPhoneNumber(
            countryCode,
            number,
            { 0: proof.compressedProof },
            packedAddressTreeInfo,
            outputTreeIndex,
          )
          .accounts({
            settings: settingsPda,
            centralState: centralStatePda,
            buyer: publicKey,
            systemProgram: SystemProgram.programId,
            treasuryPda: treasuryPda,
          } as any)
          .remainingAccounts(
            remainingAccounts.toAccountMetas().remainingAccounts,
          )
          .instruction(),
      ];

      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash();

      const message = new TransactionMessage({
        payerKey: publicKey,
        recentBlockhash: blockhash,
        instructions,
      }).compileToV0Message();

      const tx = new VersionedTransaction(message);

      const sig = await sendTransaction(tx, connection);

      await connection.confirmTransaction(
        { signature: sig, blockhash, lastValidBlockHeight },
        "confirmed",
      );

      console.log("✅ Transaction confirmed:", sig);
      return sig;
    },
    onSuccess: () => {
      showToast("Number claimed successfully", {
        type: "success",
      });
    },
    onError: (e) => {
      if (e && e instanceof Error && e.message) {
        showToast(e.message, {
          type: "error",
        });
      }
    },
  });
};
