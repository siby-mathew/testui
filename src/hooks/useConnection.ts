import { Connection } from "@solana/web3.js";
let connection: Connection;
export const useConnection = () => {
  if (!connection) {
    connection = new Connection(import.meta.env.VITE_RPC_ENDPOINT);
    return connection;
  }
  return connection;
};
