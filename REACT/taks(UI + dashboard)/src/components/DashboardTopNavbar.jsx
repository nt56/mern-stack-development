// components/Navbar.js
import { Bell, Search } from "lucide-react";

const DashboardTopNavbar = () => {
  return (
    <header className="flex w-full justify-between items-center px-6 py-4 bg-white">
      <div className="flex items-center bg-gray-100 p-2 rounded-md w-full max-w-md">
        <Search className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full"
        />
      </div>
      <div className="flex items-center gap-4">
        <Bell className="text-gray-600 cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default DashboardTopNavbar;
