const orders = [
  {
    orderNumber: "#FC0005",
    productName: "Haldiram's Sev Bhujia",
    orderDate: "28 March 2023",
    price: "$18.00",
    status: "Shipped",
  },
  {
    orderNumber: "#FC0004",
    productName: "NutriChoice Digestive",
    orderDate: "24 March 2023",
    price: "$24.00",
    status: "Pending",
  },
  {
    orderNumber: "#FC0003",
    productName: "Onion Flavour Potato",
    orderDate: "8 Feb 2023",
    price: "$9.00",
    status: "Cancel",
  },
  {
    orderNumber: "#FC0002",
    productName: "Blueberry Greek Yogurt",
    orderDate: "20 Jan 2023",
    price: "$12.00",
    status: "Pending",
  },
  {
    orderNumber: "#FC0001",
    productName: "Slurrp Millet Chocolate",
    orderDate: "14 Jan 2023",
    price: "$8.00",
    status: "Processing",
  },
];

const statusStyles = {
  Shipped: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Cancel: "bg-red-100 text-red-800",
  Processing: "bg-blue-100 text-blue-800",
};

export const DashboardRecentOrders = () => (
  <div className="bg-white shadow rounded-xl p-6">
    <h2 className="text-lg font-semibold mb-4">Recent Order</h2>
    <table className="min-w-full text-sm">
      <thead className="bg-gray-100">
        <tr className="">
          <th className="py-2 px-4 text-left font-medium">Order Number</th>
          <th className="py-2 px-4 text-left font-medium">Product Name</th>
          <th className="py-2 px-4 text-left font-medium">Order Date</th>
          <th className="py-2 px-4 text-left font-medium">Price</th>
          <th className="py-2 px-4 text-left font-medium">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.orderNumber} className="">
            <td className="py-3 px-4">{order.orderNumber}</td>
            <td className="py-3 px-4">{order.productName}</td>
            <td className="py-3 px-4">{order.orderDate}</td>
            <td className="py-3 px-4">{order.price}</td>
            <td className="py-3 px-4">
              <span
                className={`px-2 py-1 rounded text-xs font-medium ${
                  statusStyles[order.status]
                }`}
              >
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
