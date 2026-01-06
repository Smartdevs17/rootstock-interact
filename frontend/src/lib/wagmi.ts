import { http, createConfig } from 'wagmi';
import { rootstock, rootstockTestnet } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

// Rootstock chains configuration
export const config = createConfig({
  chains: [rootstock, rootstockTestnet],
  connectors: [
    injected(),
  ],
  transports: {
    [rootstock.id]: http(),
    [rootstockTestnet.id]: http(),
  },
});

export const supportedChains = [rootstock, rootstockTestnet] as const;
export type SupportedChain = typeof supportedChains[number];
