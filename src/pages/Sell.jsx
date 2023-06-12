import React, { useState } from "react";

const Sell = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [shippingMethod, setShippingMethod] = useState("");
  const [location, setLocation] = useState("");

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    // Limit the number of images to 6
    if (files.length > 6) {
      alert("You can only upload up to 6 images");
      return;
    }

    // Perform any additional validation if needed

    setProductImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your submit logic here, such as sending the data to an API or storing it in a state variable
    // You can access the uploaded images using the `productImages` state

    // Clear form inputs and images
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductQuantity("");
    setProductImages([]);
    setShippingMethod("");
    setLocation("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 mt-6 text-center">
        Create Listing
      </h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="productName" className="text-gray-800 font-semibold">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-4 py-2 border border-green-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productDescription"
            className="text-gray-800 font-semibold">
            Product Description:
          </label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full px-4 py-2 border border-green-300 rounded mt-1"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="productPrice" className="text-gray-800 font-semibold">
            Product Price:
          </label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full px-4 py-2 border border-green-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productQuantity"
            className="text-gray-800 font-semibold">
            Product Quantity:
          </label>
          <input
            type="number"
            id="productQuantity"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            className="w-full px-4 py-2 border border-green-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="text-gray-800 font-semibold">
            Location:
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-green-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productImages"
            className="text-gray-800 font-semibold">
            Product Images:
          </label>
          <input
            type="file"
            id="productImages"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            required
            className="w-full mt-1 px-3 py-1.5 text-gray-700 bg-white border border-green-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-green-500"
          />
          <p className="text-sm text-gray-500 mt-2">
            Upload up to 6 images for the product. Click the button above or
            drag and drop the images here.
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="shippingMethod"
            className="text-gray-800 font-semibold">
            Shipping Method:
          </label>
          <select
            id="shippingMethod"
            value={shippingMethod}
            onChange={(e) => setShippingMethod(e.target.value)}
            className="w-full px-4 py-2 border border-green-300 rounded mt-1">
            <option value="">Select shipping method</option>
            <option value="Standard">Standard</option>
            <option value="Express">Express</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
          Create Listing
        </button>
      </form>
    </div>
  );
};

export default Sell;
