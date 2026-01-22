import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalButton,
} from "@solana/wallet-adapter-react-ui";

export const ButtonHandler: React.FC = () => {
  const { connected } = useWallet();
  return connected ? (
    <WalletDisconnectButton
      style={{
        opacity: 0,
        position: "absolute",
        inset: 0,
      }}
    />
  ) : (
    <WalletModalButton
      style={{
        opacity: 0,
        position: "absolute",
        inset: 0,
      }}
    />
  );
};
