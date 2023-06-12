import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-white text-lg font-bold">Contact Us</h3>
            <p className="text-gray-400">123 Farm Road, Lusaka</p>
            <p className="text-gray-400">Phone: 260-956-7890</p>
            <p className="text-gray-400">Email: info@mulimi.com</p>
          </div>
          <form className="md:w-1/2">
            <p className="text-gray-400 mb-2">
              Subscribe for updates on the latest products:
            </p>
            <div className="flex items-center">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-gray-900 text-white px-4 py-2 rounded-l-md focus:outline-none focus:bg-white focus:text-gray-900"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 focus:outline-none">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Mulimi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
