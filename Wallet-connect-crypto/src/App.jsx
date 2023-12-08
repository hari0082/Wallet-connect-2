import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";
import ConnectButton from "./ConnectButton";

const projectId = "068a4b55288039a0ecd58b2fe0098157";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

const web3Modal = createWeb3Modal({ wagmiConfig, projectId, chains });

function App() {
  return (
    <WagmiConfig config={wagmiConfig} web3Modal={web3Modal}>
      <div className="nav">
        <h1>Wallet login</h1>
        <ConnectButton />
      </div>
    </WagmiConfig>
  );
}

export default App;
