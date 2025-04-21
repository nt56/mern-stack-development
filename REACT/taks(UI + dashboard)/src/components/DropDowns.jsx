import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "All Categories", icon: <Menu size={18} /> },
  { label: "Home" },
  { label: "Shop" },
  { label: "Stores" },
  { label: "Mega menu" },
  { label: "Pages" },
  { label: "Account" },
  { label: "Dashboard" },
  { label: "Docs" },
];

const DropDowns = () => {
  return (
    <div className="flex items-center space-x-6 text-sm text-gray-700 font-medium bg-transparent gap-5">
      {navLinks.map((link, index) => (
        <div
          key={index}
          className="flex items-center space-x-1 cursor-pointer hover:text-green-600 transition-colors duration-200"
        >
          {link.icon && link.icon}
          {link.label === "Dashboard" ? (
            <Link to="/dashboard">
              <span className="pl-2">{link.label}</span>
            </Link>
          ) : (
            <span className="pl-2">{link.label}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDowns;
