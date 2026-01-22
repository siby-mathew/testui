import { useQuery } from "@tanstack/react-query";
import { useLightRpc } from "./useLightRpc";

import {
  deriveAddress,
  deriveAddressSeed,
  getDefaultAddressTreeInfo,
} from "@lightprotocol/stateless.js";

import { useSolphoneProgramInstance } from "./useSolphoneProgramInsrance";

const countryCode = "+91";

export const useCheckNumberAvailability = (phoneNumber: string) => {
  const lightRpc = useLightRpc();

  const { program } = useSolphoneProgramInstance();

  return useQuery<boolean>({
    queryKey: ["number-availability", phoneNumber],
    refetchInterval: 2500,
    enabled: !!program && !!phoneNumber && phoneNumber.length === 10,
    queryFn: async () => {
      if (!program) return !1;
      const addressTreeInfo = getDefaultAddressTreeInfo();

      const addressSeed = deriveAddressSeed(
        [
          Buffer.from("phone_number"),
          Buffer.from(countryCode),
          Buffer.from(phoneNumber),
        ],
        program!.programId,
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
          return !1;
        }
      } catch {
        console.log("Phone number doesn't exist, proceeding with purchase");
      }
      return !0;
    },
  });
};
