import React from "react";
import { Bell, User, ShoppingBag, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full px-6 py-3 flex justify-between items-center bg-white">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <ShoppingCart className="text-green-600" size={28} />
        <h1 className="text-2xl font-bold text-gray-800">FreshCart</h1>
      </div>

      {/* Center: Search Bar */}
      <div className="flex flex-1 max-w-xl mx-6">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none text-sm"
        />
        <button className="bg-green-600 text-white px-5 rounded-r-md text-sm font-semibold">
          Search
        </button>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-6 text-sm text-gray-700">
        {/* Notification */}
        <div className="relative flex flex-col items-center cursor-pointer hover:text-green-600">
          <Bell size={20} />
          <span className="absolute -top-1 -right-0 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
          <span className="mt-1">Notification</span>
        </div>

        {/* Sign Up */}
        <div className="flex flex-col items-center cursor-pointer hover:text-green-600">
          <User size={20} />
          <span className="mt-1">Sign up</span>
        </div>

        {/* My Orders */}
        <div className="flex flex-col items-center cursor-pointer hover:text-green-600">
          <ShoppingBag size={20} />
          <span className="mt-1">My Orders</span>
        </div>

        {/* Shopping Cart */}
        <div className="flex flex-col items-center cursor-pointer hover:text-green-600">
          <ShoppingCart size={20} />
          <span className="mt-1">Shopping Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
