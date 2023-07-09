"use client";
import { useState, useEffect, useContext } from "react";
import ProviderContext from "../store/ProviderContext";

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import Btn from "./Btn";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    rpc: {
      11155111: "https://eth-sepolia.g.alchemy.com/v2/",
      network: "sepoliaETH",
    },
    options: {
      qrcodeModalOptions: {
        mobileLinks: [
          "metamask",
          "rainbow",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ],
      },
    },
  },
};

const web3Modal = new Web3Modal({
  network: "testnet",
  cacheProvider: true,
  providerOptions,
});

export default function WalletButton() {
  const { provider, setProvider } = useContext(ProviderContext);

  const connectWallet = async () => {
    const modalProvider = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(modalProvider);
    setProvider(provider);
  };

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    setProvider(null);
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  return provider ? (
    <Btn onClick={disconnectWallet} text="Disconnect Wallet" />
  ) : (
    <Btn onClick={connectWallet} text="Connect Wallet" />
  );
}
