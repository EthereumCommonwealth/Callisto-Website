/// <reference types="react-scripts" />

interface Window {
  ethereum?: {
    isMetaMask?: true;
    request?: (...args: any[]) => Promise<void>;
  };
  CallistoChain?: {
    cloSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>;
  };
}