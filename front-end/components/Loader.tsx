import React from "react";

const Loader = ({ text }: { text: string }) => (
  <div className="fixed top-0 left-0 z-50 w-screen h-screen flex flex-col items-center justify-center bg-opacity-50 bg-gray-700">
    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
    <h2 className="text-center text-white">{text}</h2>
  </div>
);

export default Loader;
