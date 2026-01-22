import { useQuery } from "@tanstack/react-query";
import { useSolphoneProgramInstance } from "@/hooks/useSolphoneProgramInsrance";

export const useGetMyNumbers = () => {
  const { program } = useSolphoneProgramInstance();
  return useQuery({
    queryKey: ["get-registered-numbers"],
    queryFn: async () => {
      return program;
    },
  });
};
