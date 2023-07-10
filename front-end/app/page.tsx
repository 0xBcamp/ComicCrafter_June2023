"use client";
import { ethers } from "ethers";
import ImageUploadForm from "../components/ImageUploadForm";
import WalletButton from "../components/WalletButton";
import ProviderContext from "../store/ProviderContext";
import { useState } from "react";

export default function Home() {
  const [provider, setProvider] = useState<any>(null);

  return (
    <ProviderContext.Provider value={{ provider, setProvider }}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full items-center justify-between font-mono lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
            <p className="text-xl">Comic Crafter</p>
          </div>

          <div>
            <WalletButton />
          </div>
        </div>

        <div className="relative flex place-items-center ">
          <ImageUploadForm />
        </div>

        <div></div>
      </main>
    </ProviderContext.Provider>
  );
}
