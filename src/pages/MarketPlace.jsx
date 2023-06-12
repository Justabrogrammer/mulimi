import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const MarketPlace = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems } });
  };
  const handleAddToCheckout = (product) => {
    setSelectedProduct(product);
    navigate("/checkout");
  };

  function handleSeller() {
    navigate("/sell");
  }

  const [checkoutData, setCheckoutData] = useState({
    quantity: 2,
  });
  const { quantity } = checkoutData;

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems, quantity]);

  const handleSearch = () => {
    // Perform search based on searchInput and selectedCategory
    console.log("Perform search:", searchInput, selectedCategory);
  };
  const categories = [
    "Fruits",
    "Vegetables",
    "Dairy Products",
    "Grains",
    "Livestock",
  ];
  const handleAddToCart = (product) => {
    const productIndex = cartItems.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      // Remove the product from the cart
      setCartItems((prevCartItems) => {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems.splice(productIndex, 1);
        return updatedCartItems;
      });
    } else {
      // Add the product to the cart
      setCartItems((prevCartItems) => [...prevCartItems, product]);
    }
  };
  const handleAddToFavorites = (product) => {
    const productIndex = favoriteItems.findIndex(
      (item) => item.id === product.id
    );
    if (productIndex !== -1) {
      // Remove the product from favorites
      setFavoriteItems((prevFavoriteItems) => {
        const updatedFavoriteItems = [...prevFavoriteItems];
        updatedFavoriteItems.splice(productIndex, 1);
        return updatedFavoriteItems;
      });
    } else {
      // Add the product to favorites
      setFavoriteItems((prevFavoriteItems) => [...prevFavoriteItems, product]);
    }
  };

  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "Fresh eggs",
      description: "wholesale kg50 bags organic",
      category: "Category 1",
      price: 120,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      name: "Fresh Milk",
      description: "wholesale kg50 bags organic",
      category: "Category 2",
      price: 20,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1587815073078-f636169821e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      name: "Strawberries",
      description: "wholesale kg50 bags organic",
      category: "Category 2",
      price: 90,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1513868853742-e7fb786265db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
      name: "Soya Beans",
      description: "wholesale kg50 bags organic",
      category: "Category 2",
      price: 210,
    },
    // Add more products...
  ];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  const cartCount = cartItems.length;
  const favoriteCount = favoriteItems.length;

  return (
    <section>
      <div className="flex items-center justify-evenly bg-gray-200 py-4 px-8">
        <p
          className="text-gray-500 cursor-pointer hover:text-blue-500"
          onClick={handleSeller}>
          Sell your products
        </p>
        <div className="w-[50%] flex items-center justify-center space-x-4">
          <div className="w-full flex items-center justify-center border border-gray-300 rounded-lg bg-white">
            <input
              type="text"
              className="w-full bg-white rounded-lg px-4 py-2 focus:outline-none"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            {!isSmallScreen && (
              <select
                className="bg-white rounded-lg px-4 py-2 focus:outline-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">Shop by categories</option>
                <option value="1">Vegetables</option>
                <option value="2">Fruits</option>
                <option value="3">Dairy</option>
              </select>
            )}
            <button
              className="h-10 bg-green-500 text-white px-4 py-2 rounded-r-lg focus:outline-none"
              onClick={handleSearch}>
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="h-9 text-gray-500 hover:text-red-500 relative flex items-center"
            onClick={() => setShowFavorites(true)}>
            <AiOutlineHeart className="mr-2 text-lg" />
            <span className="hidden sm:inline">Favorites</span>
            {favoriteCount > 0 && (
              <span className="ml-1 absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                {favoriteCount}
              </span>
            )}
          </button>
          <button
            className="h-9 text-gray-500 hover:text-blue-500 relative flex items-center"
            onClick={() => setShowCart(true)}>
            <AiOutlineShoppingCart className="mr-2 text-lg" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="ml-1 absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <nav className="bg-white py-4 px-8">
        <ul className="flex justify-center space-x-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-green-500 cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
      </nav>
      {showCart && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="h-[60%] w-[60%] bg-white p-4 rounded-md overflow-y-auto">
            <button
              className="absolute top-12 right-2 text-3xl text-gray-100 z-10"
              onClick={() => setShowCart(false)}>
              <AiOutlineClose />
            </button>
            <p className="text-gray-700">
              Cart ({cartCount} {cartCount === 1 ? "item" : "items"})
            </p>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-evenly mt-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[10%] h-[15%] rounded"
                />
                <div>
                  <h3 className="ml-2">{item.name}</h3>
                  <p className="ml-2 text-gray-500 text-sm">{item.category}</p>
                  <p className="ml-2 text-gray-500">{item.description}</p>
                  <p className="ml-2 w-[30%] text-center text-sm mt-2 bg-gray-300 rounded-lg">
                    ZMW {item.price}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">Quantity:</p>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    min="1"
                    max="300"
                    className="w-full px-4 py-2 text-md text-gray-700 bg-white border border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center transition duration-150 ease-in-out"
                  />
                </div>
              </div>
            ))}
            <button
              className="w-full h-10 mt-6 bg-green-500 text-white text-center rounded-md hover:bg-green-700"
              onClick={handleCheckout}>
              Checkout (ZMW {totalPrice.toFixed(2)})
            </button>
          </div>
        </div>
      )}

      {showFavorites && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowFavorites(false)}>
          <div className="bg-white p-4 rounded-lg">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setShowFavorites(false)}>
              <AiOutlineClose />
            </button>
            <p className="text-gray-700">
              Favorites ({favoriteCount}{" "}
              {favoriteCount === 1 ? "item" : "items"})
            </p>
            {favoriteItems.map((item) => (
              <div key={item.id} className="flex items-center mt-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 rounded-full"
                />
                <p className="ml-2">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[40%] object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="text-gray-500">{product.description}</p>
            <p className="w-[30%] text-center text-sm mt-2 bg-gray-300 rounded-lg">
              ZMW {product.price}
            </p>
            <div className="flex justify-between items-center mt-4">
              <button
                className={`w-[25%] text-gray-500 hover:text-red-500 ${
                  favoriteItems.some((item) => item.id === product.id)
                    ? "text-red-500"
                    : ""
                }`}
                onClick={() => handleAddToFavorites(product)}>
                <AiOutlineHeart className="text-3xl" />
              </button>
              <button
                className={`w-[25%] text-gray-500 hover:text-blue-500 ${
                  cartItems.some((item) => item.id === product.id)
                    ? "text-blue-500"
                    : ""
                }`}
                onClick={() => handleAddToCart(product)}>
                <AiOutlineShoppingCart className="text-3xl" />
              </button>
              <button
                className="w-full h-10 bg-green-500 text-white text-center rounded-md hover:bg-green-700"
                onClick={() =>
                  navigate("/checkout", { state: { selectedProduct: product } })
                }>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketPlace;
