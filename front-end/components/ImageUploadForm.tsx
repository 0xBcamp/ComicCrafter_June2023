"use client";
import React, { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";

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

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Event handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("No file selected!");
      return;
    }

    // upload files
    const result = await ipfs.add(selectedFile);
    const cid = result.cid.toString();
    const url = `https://ipfs.io/ipfs/${cid}`;
    // Process and upload image file...
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setSelectedFile(file);
  };

  return (
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
            className="mt-2 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ImageUploadForm;
