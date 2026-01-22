import devIdl from "@/integrations/idl/solphone-dev/solnumber_contract.json";
import preprodIdl from "@/integrations/idl/solphone-preprod/solnumber_contract.json";

const env = import.meta.env.MODE || "development";
export const IDL =
  env === "preprod" ? preprodIdl : env === "production" ? preprodIdl : devIdl;

export type SolphoneContract =
  | import("@/integrations/idl/solphone-dev/solnumber_contract").SolnumberContract
  | import("@/integrations/idl/solphone-preprod/solnumber_contract").SolnumberContract;
