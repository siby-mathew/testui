import { useQuery } from "@tanstack/react-query";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useConnection } from "@/hooks/useConnection";
import { useWallet } from "@solana/wallet-adapter-react";

export const useSolBalance = () => {
  const { publicKey, connected } = useWallet();
  const connection = useConnection();
  return useQuery({
    queryKey: ["sol-balance", publicKey?.toString()],
    enabled: connected,
    queryFn: async () => {
      if (!connection) throw new Error("No connection");
      if (!connected || !publicKey) throw new Error("Wallet not connected");

      const lamports = await connection.getBalance(publicKey);

      return {
        lamports,
        formatted: lamports / LAMPORTS_PER_SOL,
      };
    },

    staleTime: 15_000,
    refetchInterval: 30_000,
  });
};
