import {
  Milk,
  Pizza,
  Apple,
  Baby,
  PillBottleIcon,
  Cookie,
  Drumstick,
  ChevronRight,
  Smartphone,
  RotateCcw,
  ShoppingCart,
  Clock,
} from "lucide-react";

const categories = [
  { icon: <Milk />, label: "Dairy, Bread & Eggs" },
  { icon: <Pizza />, label: "Snacks & Munchies" },
  { icon: <Apple />, label: "Fruits & Vegetables" },
  { icon: <PillBottleIcon />, label: "Cold Drinks & Juices" },
  { icon: <Baby />, label: "Baby Care" },
  { icon: <Cookie />, label: "Bakery & Biscuits" },
  { icon: <Drumstick />, label: "Chicken, Meat & Fish" },
];

const infos = [
  {
    icon: <Smartphone className="text-green-500" />,
    text: "Download the FreshCart App to your Phone.",
  },
  {
    icon: <RotateCcw className="text-green-500" />,
    text: "Return Policy customers can return a product and ask for a refund.",
  },
  {
    icon: <ShoppingCart className="text-green-500" />,
    text: "Order now so you don’t miss the opportunities.",
  },
  {
    icon: <Clock className="text-green-500" />,
    text: "Your order will arrive at your door in 15 minutes.",
  },
];

const SideBar = () => {
  return (
    <aside className="space-y-6">
      {/* Categories */}
      <div>
        <h2 className="font-semibold text-lg">Categories</h2>
        <div className="rounded-xl border divide-y bg-white mt-2">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <ChevronRight className="text-gray-400 w-4 h-4" />
            </div>
          ))}
        </div>
      </div>

      {/* Info Cards */}
      <div className="rounded-xl border divide-y bg-white">
        {infos.map((info, index) => (
          <div key={index} className="flex items-start gap-3 px-4 py-3">
            <div className="text-xl">{info.icon}</div>
            <p className="text-sm text-gray-700">{info.text}</p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div>
        <h2 className="font-semibold text-lg">Testimonials</h2>
        <div className="bg-yellow-100 p-4 rounded-xl mt-2">
          <h3 className="font-semibold text-sm text-gray-900">
            The Best Grocery Store Design
          </h3>
          <p className="text-sm text-gray-700 mt-2 leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            iaculis maximus purus, a gravida dui tempor eget.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="testimonial"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Alishia Jones
              </p>
              <p className="text-xs text-gray-500">Sales Manager</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
