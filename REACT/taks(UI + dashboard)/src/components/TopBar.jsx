import React from "react";

const TopBar = () => {
  return (
    <div className="w-full bg-white text-sm text-gray-600 px-4 py-2 flex justify-between items-center ">
      {/* Left: Currency & Language */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-1 cursor-pointer">
          <span>USD $</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <span>English</span>
        </div>
      </div>

      {/* Right: Support Links */}
      <div className="flex items-center space-x-6">
        <a href="#" className="hover:underline hover:text-green-600">
          Support
        </a>
        <a href="#" className="hover:underline hover:text-green-600">
          Delivery
        </a>
        <a href="#" className="hover:underline hover:text-green-600">
          Warranty
        </a>
      </div>
    </div>
  );
};

export default TopBar;
