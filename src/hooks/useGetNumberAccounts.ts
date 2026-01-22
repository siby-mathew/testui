import type {
  GetPhoneNumbersQuery,
  GetPhoneNumbersQueryVariables,
} from "@/gql/graphql";
import { GET_USER_NUMBERS } from "@/integrations/graphql/queries";
import { useQuery } from "@apollo/client";
import { useWallet } from "@solana/wallet-adapter-react";

export const useGetNumberAccounts = () => {
  const { publicKey, connected } = useWallet();

  const { data, loading, refetch } = useQuery<
    GetPhoneNumbersQuery,
    GetPhoneNumbersQueryVariables
  >(GET_USER_NUMBERS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
    skip: !connected || !publicKey,
    variables: {
      wallet: publicKey?.toString() ?? "",
      limit: 100,
      offset: 0,
    },
  });

  return {
    data,
    loading,
    refetch,
  };
};
