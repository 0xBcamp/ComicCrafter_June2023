import React from "react";

const ImageUploadForm = () => {
  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Process and upload image file...
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-5 text-gray-900">Upload Image</h2>

      <form encType="multipart/form-data">
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
