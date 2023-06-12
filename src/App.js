import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Funding from "./pages/Funding";
import Insurance from "./pages/Insurance";
import Support from "./pages/Support";
import SignIn from "./pages/SignIn";
import MarketPlace from "./pages/MarketPlace";
import Sell from "./pages/Sell";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/support" element={<Support />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </>
  );
}

export default App;
