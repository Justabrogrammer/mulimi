import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function CheckoutPage() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState(location?.state?.cartItems || []);
  const initialSelectedProduct = location.state.selectedProduct || null;
  const [selectedProduct, setSelectedProduct] = useState(
    initialSelectedProduct
  );
  const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [useDeliveryAddress, setUseDeliveryAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardExpiration, setCardExpiration] = useState("");
  const [mobileMoneyProvider, setMobileMoneyProvider] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  //Billing and delivery
  const handleUseDeliveryAddressChange = (e) => {
    setUseDeliveryAddress(e.target.checked);
    if (e.target.checked) {
      setBillingAddress(deliveryAddress);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the checkout logic here

    // Clear the form fields
    setDeliveryAddress("");
    setBillingAddress("");
    setUseDeliveryAddress(false);
    setPaymentMethod("card");
    setCardNumber("");
    setCardExpiration("");
    setMobileMoneyProvider("");
    setMobileNumber("");
  };
  // Calculate the total amount
  useEffect(() => {
    calculateTotalAmount();
  }, [cartItems, selectedProduct]);

  const calculateTotalAmount = () => {
    let total = 0;

    // Calculate the total amount for cart items
    cartItems.forEach((item) => {
      const quantity = parseInt(item.quantity);
      if (!isNaN(quantity)) {
        total += item.price * quantity;
      } else {
        total += item.price;
      }
    });

    // Calculate the total amount for the selected product (if available)
    if (selectedProduct) {
      const quantity = parseInt(selectedProduct.quantity);
      if (!isNaN(quantity) && quantity > 0) {
        total += selectedProduct.price * quantity;
      } else {
        total += selectedProduct.price;
      }
    }

    setTotalAmount(total);
  };

  const handleQuantityChange = (e, item) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      if (item.id === selectedProduct?.id) {
        setSelectedProduct((prevProduct) => ({
          ...prevProduct,
          quantity: newQuantity,
        }));
      } else {
        const updatedItems = cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        );
        setCartItems(updatedItems);
      }
    }
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mt-4 text-center">Checkout</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-1 mt-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded mr-4"
              />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-gray-500">ZMW {item.price}</p>
                <div className="flex items-center">
                  <p className="text-gray-500 mr-2">Quantity</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    max="300"
                    onChange={(e) => handleQuantityChange(e, item)}
                    className="w-20 px-2 py-1 text-md text-center text-gray-700 bg-white border border-green-300 rounded focus:text-gray-700 focus:bg-white focus:border-green-600"
                  />
                </div>
              </div>
            </div>
          ))}
          <div>
            {selectedProduct && (
              <div className="flex items-center mb-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-40 h-40 rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold mt-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {selectedProduct.category}
                  </p>
                  <p className="text-gray-500">{selectedProduct.description}</p>
                  <p className="text-gray-500">ZMW {selectedProduct.price}</p>
                  <div className="flex items-center">
                    <p className="text-gray-500 mr-2">Quantity</p>
                    <input
                      type="number"
                      value={selectedProduct.quantity}
                      min="1"
                      max="300"
                      onChange={handleQuantityChange}
                      className="w-20 px-2 py-1 text-md text-center text-gray-700 bg-white border border-green-300 rounded focus:text-gray-700 focus:bg-white focus:border-green-300"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="mt-4 flex mb-6">
              <h3 className="font-bold mr-2">Total Amount:</h3>
              <p className="border-b-2 border-b-slate-400">
                ZMW {totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:ml-8 md:w-64 mt-4 md:mt-0 md:mr-40 mb-6">
          <div className="bg-white p-4 md:sticky md:top-4">
            <form
              onSubmit={handleSubmit}
              className="w-[170%] p-4 mt-4 border border-green-200 rounded-md bg-gray-200">
              <div className="flex mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-center text-green-500">
                    Delivery Address
                  </h3>
                  <div className="flex mb-2">
                    <div className="mr-4">
                      <label htmlFor="firstName" className="font-semibold">
                        First Name:
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={""}
                        className="mt-1 border border-green-200 rounded-md"
                        onChange={(e) => {}}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="font-semibold">
                        Last Name:
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={""}
                        className="mt-1 border border-green-200 rounded-md"
                        onChange={(e) => {}}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="font-semibold mr-2">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={""}
                      className="mt-4 border border-green-200 rounded-md"
                      onChange={(e) => {}}
                    />
                  </div>
                  <div className="flex mb-2">
                    <div className="mr-4">
                      <label htmlFor="streetAddress" className="font-semibold">
                        Street Address:
                      </label>
                      <input
                        type="text"
                        id="streetAddress"
                        value={""}
                        className="mt-1 border border-green-200 rounded-md"
                        onChange={(e) => {}}
                      />
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="font-semibold">
                        Postal Code:
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        value={""}
                        className="mt-1 border border-green-200 rounded-md"
                        onChange={(e) => {}}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="font-semibold mr-2">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={""}
                      className="mt-4 border border-green-200 rounded-md"
                      onChange={(e) => {}}
                    />
                  </div>
                  <label className="text-gray-500">
                    <input
                      type="checkbox"
                      checked={useDeliveryAddress}
                      onChange={handleUseDeliveryAddressChange}
                    />
                    Use delivery address as billing address
                  </label>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-center text-green-500">
                  Billing Address
                </h3>
                <div className="flex mb-2">
                  <div className="mr-4">
                    <label htmlFor="firstName" className="font-semibold">
                      First Name:
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={""}
                      className="mt-1 border border-green-200 rounded-md"
                      onChange={(e) => {}}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="font-semibold">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={""}
                      className="mt-1 border border-green-200 rounded-md"
                      onChange={(e) => {}}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="font-semibold">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={""}
                    className="mt-1 border border-green-200 rounded-md"
                    onChange={(e) => {}}
                  />
                </div>
                <div className="flex mb-2">
                  <div className="mr-4">
                    <label htmlFor="streetAddress" className="font-semibold">
                      Street Address:
                    </label>
                    <input
                      type="text"
                      id="streetAddress"
                      value={""}
                      className="mt-1 border border-green-200 rounded-md"
                      onChange={(e) => {}}
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="font-semibold">
                      Postal Code:
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      value={""}
                      className="mt-1 border border-green-200 rounded-md"
                      onChange={(e) => {}}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="font-semibold mr-1">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={""}
                    className="mt-2 border border-green-200 rounded-md"
                    onChange={(e) => {}}
                  />
                </div>
              </div>
              <label className="text-green-500 font-semibold mr-2">
                Payment Method:
              </label>
              <select
                value={paymentMethod}
                className="mt-2 border border-green-200 rounded"
                onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="card">Debit/Credit Card</option>
                <option value="mobileMoney">Mobile Money</option>
              </select>

              {paymentMethod === "card" && (
                <div className="flex-1">
                  <h3 className="font-bold text-center">Card Details</h3>
                  <div className="mb-2">
                    <label htmlFor="cardNumber" className="font-semibold mr-2">
                      Card Number:
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      className="mt-2 border border-green-200 rounded-md"
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="cardExpiration"
                      className="font-semibold mr-2">
                      Card Expiration:
                    </label>
                    <input
                      type="text"
                      id="cardExpiration"
                      value={cardExpiration}
                      className="mt-2 border border-green-200 rounded-md"
                      onChange={(e) => setCardExpiration(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="cardCVV" className="font-semibold mr-2">
                      CVV:
                    </label>
                    <input
                      type="text"
                      id="cardCVV"
                      value={cardCVV}
                      className="mt-2 border border-green-200 rounded-md"
                      onChange={(e) => setCardCVV(e.target.value)}
                    />
                  </div>
                </div>
              )}
              {paymentMethod === "mobileMoney" && (
                <div>
                  <label
                    htmlFor="mobileMoneyProvider"
                    className="font-semibold mr-2">
                    Provider:
                  </label>
                  <input
                    type="text"
                    id="mobileMoneyProvider"
                    value={mobileMoneyProvider}
                    className="mt-2 border border-green-200 rounded-md"
                    onChange={(e) => setMobileMoneyProvider(e.target.value)}
                  />
                  <div className="flex items-center">
                    <label
                      htmlFor="mobileNumber"
                      className="font-semibold mr-2 mt-2">
                      Mobile Number:
                    </label>
                    <input
                      type="text"
                      id="mobileNumber"
                      value={mobileNumber}
                      className="mt-2 border border-green-200 rounded-md"
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="h-10 mt-4 w-full font-semibold  border  border-green-300 bg-green-500 hover:bg-green-600 active:bg-green-700 justify-center items-center text-white transition duration-150 ease-in-out rounded">
                Complete Purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
