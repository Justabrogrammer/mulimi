import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../mulimi.png";
export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-44 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-10 text-gray-600 hover:text-black">
              <li className="py-3 text-sm font-semibold cursor-pointer group relative">
                Products
                <ul className="absolute bg-white border border-gray-200 border-t-0 rounded-b-lg shadow-sm py-2 px-3 w-48 hidden top-full left-0 transition duration-300 ease-in-out delay-500 group-hover:block">
                  <li
                    className="text-sm py-1"
                    onClick={() => {
                      navigate("/funding");
                      handleLinkClick();
                    }}>
                    Funding
                  </li>
                  <li
                    className="text-sm py-1"
                    onClick={() => {
                      navigate("/insurance");
                      handleLinkClick();
                    }}>
                    Insurance
                  </li>
                  <li
                    className="text-sm py-1"
                    onClick={() => {
                      navigate("/support");
                      handleLinkClick();
                    }}>
                    Mulimi Support
                  </li>
                </ul>
              </li>
              <li
                className="py-3 text-sm font-semibold cursor-pointer"
                onClick={() => {
                  navigate("/market-place");
                  handleLinkClick();
                }}>
                Market Place
              </li>
              <li className="py-3 text-sm font-semibold cursor-pointer group relative">
                Account
                <ul className="absolute bg-white border border-gray-200 border-t-0 rounded-b-lg shadow-sm py-2 px-3 hidden w-24 top-full left-0 group-hover:block">
                  <li
                    className="text-sm py-1"
                    onClick={() => {
                      navigate("/sign-in");
                      handleLinkClick();
                    }}>
                    Sign in
                  </li>
                  <li
                    className="text-sm py-1"
                    onClick={() => {
                      navigate("/register");
                      handleLinkClick();
                    }}>
                    Register
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Menu Button for Small Screens */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-black focus:outline-none"
              onClick={toggleMenu}>
              {isMenuOpen ? (
                <AiOutlineClose className="text-2xl" />
              ) : (
                <AiOutlineMenu className="text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-0 right-0 left-0 bg-white border-b border-gray-200">
              <ul className="py-4 px-6 text-gray-600">
                <li className="py-2 text-sm font-semibold">
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      navigate("/funding");
                      handleLinkClick();
                    }}>
                    Funding
                  </button>
                </li>
                <li className="py-2 text-sm font-semibold">
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      navigate("/insurance");
                      handleLinkClick();
                    }}>
                    Insurance
                  </button>
                </li>
                <li className="py-2 text-sm font-semibold">
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      navigate("/support");
                      handleLinkClick();
                    }}>
                    Mulimi Support
                  </button>
                </li>
                <li className="py-2 text-sm font-semibold">
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      navigate("/market-place");
                      handleLinkClick();
                    }}>
                    Market Place
                  </button>
                </li>
                <li className="py-2 text-sm font-semibold">
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      navigate("/sign-in");
                      handleLinkClick();
                    }}>
                    Sign in
                  </button>
                </li>
                <li className="py-2 text-sm font-semibold">
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      navigate("/register");
                      handleLinkClick();
                    }}>
                    Register
                  </button>
                </li>
              </ul>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
