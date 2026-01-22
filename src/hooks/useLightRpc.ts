import { createRpc } from "@lightprotocol/stateless.js";
export const useLightRpc = () => {
  return createRpc(
    import.meta.env.VITE_RPC_ENDPOINT,
    import.meta.env.VITE_RPC_ENDPOINT,
  );
};
