import { IDL } from "@/integrations/idl/index";
import type { SolphoneContract } from "@/integrations/idl/index";
import { useGetProgramInstance } from "@/hooks/useGetProgramInstance";

export const useSolphoneProgramInstance = () => {
  return useGetProgramInstance<SolphoneContract>(IDL as SolphoneContract);
};
