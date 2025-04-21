import {
  ShoppingCart,
  LayoutList,
  PackageSearch,
  Users,
  Star,
  Menu,
  Settings,
  FileText,
  Image,
  HelpCircle,
  Headphones,
  Infinity,
  Apple,
  Play,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <aside className="w-72 bg-white h-screen p-4  hidden md:block">
      <Link to="/">
        <div className="flex items-center gap-2 px-3 mb-6">
          <ShoppingCart className="text-green-600" size={24} />
          <h1 className="text-xl font-semibold text-green-600">FreshCart</h1>
        </div>
      </Link>

      <div className="bg-green-100 text-green-800 rounded-xl px-4 py-2 flex items-center gap-3 mb-4">
        <Home className="w-5 h-5" />
        <span className="font-medium">Dashboard</span>
      </div>

      {/* Store Management Section */}
      <SectionTitle>Store Managements</SectionTitle>
      <SidebarItem icon={<ShoppingCart size={18} />} label="Products" />
      <SidebarItem icon={<LayoutList size={18} />} label="Categories" />
      <SidebarItem icon={<PackageSearch size={18} />} label="Orders" />
      <SidebarItem icon={<Users size={18} />} label="Sellers / Vendors" />
      <SidebarItem icon={<Users size={18} />} label="Customers" />
      <SidebarItem icon={<Star size={18} />} label="Reviews" />
      <SidebarItem icon={<Menu size={18} />} label="Menu Level" />

      {/* Site Settings Section */}
      <SectionTitle>
        Site Settings <Badge>Coming Soon</Badge>
      </SectionTitle>
      <SidebarItem icon={<FileText size={18} />} label="Blog" disabled />
      <SidebarItem icon={<Image size={18} />} label="Media" disabled />
      <SidebarItem
        icon={<Settings size={18} />}
        label="Store Settings"
        disabled
      />

      {/* Support Section */}
      <SectionTitle>
        Support <Badge>Coming Soon</Badge>
      </SectionTitle>
      <SidebarItem
        icon={<Headphones size={18} />}
        label="Support Ticket"
        disabled
      />
      <SidebarItem
        icon={<HelpCircle size={18} />}
        label="Help Center"
        disabled
      />
      <SidebarItem
        icon={<Infinity size={18} />}
        label="How FreshCart Works"
        disabled
      />

      {/* Our Apps Section */}
      <SectionTitle>Our Apps</SectionTitle>
      <SidebarItem icon={<Apple size={18} />} label="Apple Store" disabled />
      <SidebarItem
        icon={<Play size={18} />}
        label="Google Play Store"
        disabled
      />
    </aside>
  );
};

// Components
const SidebarItem = ({ icon, label, disabled }) => (
  <div
    className={`flex items-center gap-5 px-3 py-3 rounded cursor-pointer ${
      disabled
        ? "text-gray-400 cursor-not-allowed"
        : "hover:bg-gray-100 text-gray-700"
    }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

const SectionTitle = ({ children }) => (
  <div className="text-xs text-gray-500 font-semibold uppercase mt-5 mb-2 px-3 flex items-center justify-between">
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="text-[10px] bg-blue-100 text-blue-600 font-medium px-2 py-0.5 rounded-full ml-2">
    {children}
  </span>
);

export default DashboardSidebar;
