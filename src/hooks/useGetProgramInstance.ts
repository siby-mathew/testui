import { useMemo } from "react";
import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program, type Idl } from "@coral-xyz/anchor";
import { useWallet } from "@solana/wallet-adapter-react";

import { useConnection } from "@/hooks/useConnection";

export const useGetProgramInstance = <T extends Idl>(IDL: T) => {
  const { publicKey, signTransaction, signAllTransactions, connected } =
    useWallet();
  const connection = useConnection();

  return useMemo(() => {
    if (!connected || !publicKey || !signTransaction || !signAllTransactions) {
      return {
        provider: null,
        program: null,
        mailAccountAddress: null,
      };
    }

    const provider = new AnchorProvider(
      connection,
      {
        publicKey,
        signTransaction,
        signAllTransactions,
      },
      { commitment: "processed" },
    );

    const programID = new PublicKey(IDL.address);
    const [mailAccountAddress] = PublicKey.findProgramAddressSync(
      [Buffer.from("mail-accountv2"), publicKey.toBuffer()],
      programID,
    );

    const program = new Program<T>(IDL as T, provider);

    return {
      provider,
      program,
      mailAccountAddress,
    };
  }, [
    IDL,
    connected,
    connection,
    publicKey,
    signTransaction,
    signAllTransactions,
  ]);
};
