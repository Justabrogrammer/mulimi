import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  // User details
  const [name, setName] = useState("John Moses");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("097-456-7890");

  const navigate = useNavigate();

  // Sample orders and listings data
  const orders = [
    { id: 1, product: "Product 1", price: 10 },
    { id: 2, product: "Product 2", price: 20 },
    { id: 3, product: "Product 3", price: 30 },
  ];

  const listings = [];

  const handleEditDetails = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div>
        <h2 className="text-center text-3xl font-bold mt-6 mb-6">
          Profile Details
        </h2>

        <input
          type="text"
          value={name}
          disabled={!isEditing}
          className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-green-300 rounded transition duration-150 ease-in-out ${
            isEditing && "bg-yellow-200 focus:bg-green-200"
          }`}
        />

        <input
          type="email"
          value={email}
          disabled
          className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-green-300 rounded transistion duration-150 ease-in-out"
        />
        <input
          type="text"
          value={phone}
          disabled={!isEditing}
          className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-green-300 rounded transition duration-150 ease-in-out ${
            isEditing && "bg-yellow-200 focus:bg-green-200"
          }`}
        />
        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
          <p
            onClick={handleEditDetails}
            className="text-green-600 hover:text-green-700 transition ease-in-out duration-200 cursor-pointer">
            {isEditing ? "Save Changes" : "Edit Details"}
          </p>
          <p className="text-green-600 hover:text-green-800 transition duration-200 ease-in-out cursor-pointer">
            Sign Out
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-center">My Orders</h2>
        <div className="mt-6">
          {orders.length > 0 ? (
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  {order.product} - ZMW {order.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center">My Listings</h2>
        <div className="mt-6">
          {listings.length > 0 ? (
            <ul>
              {listings.map((listing) => (
                <li key={listing.id}>{listing.title}</li>
              ))}
            </ul>
          ) : (
            <p>You currently have no listings.</p>
          )}
        </div>
      </div>
    </div>
  );
}
