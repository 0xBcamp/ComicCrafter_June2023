"use client";
import React, { useContext, useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Btn from "./Btn";
import ProviderContext from "@/store/ProviderContext";
import { ethers } from "ethers";
import Loader from "./Loader";
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const projectSecretKey = process.env.NEXT_PUBLIC_PROJECT_KEY;
const auth = `Basic ${btoa(`${projectId}:${projectSecretKey}`)}`;

const ipfs = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

const ImageUploadForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>("Loading...");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { provider, setProvider } = useContext(ProviderContext);

  // Event handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("No file selected!");
      return;
    }

    if (!provider) {
      alert("Connect a wallet!");
      return;
    }
    try {
      setIsLoading(true);
      // upload files
      setLoadingText("Uploading image...");
      const result = await ipfs.add(selectedFile);
      const cid = result.cid.toString();
      const url = `https://ipfs.io/ipfs/${cid}`;

      console.log("Image uploaded to ipfs", url);

      setLoadingText("Minting NFT...");
      const connectedContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        [],
        (provider as any).getSigner()
      );

      // Process and upload image file...
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setSelectedFile(file);
  };

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-5 text-gray-900">Upload Image</h2>

        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Choose an image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="mt-2 w-full py-5 px-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              onChange={handleFileChange}
            />
          </div>
          <Btn type="submit" text="Upload" disabled={!provider} />
        </form>
      </div>
      {isLoading && <Loader text={loadingText} />}
    </>
  );
};

export default ImageUploadForm;
