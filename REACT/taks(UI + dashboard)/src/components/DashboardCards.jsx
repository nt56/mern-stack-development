// components/StatsCards.js
const stats = [
  {
    title: "Earnings",
    value: "$93,438.78",
    subtext: "Monthly revenue",
    color: "text-pink-600",
  },
  {
    title: "Orders",
    value: "42,339",
    subtext: "35+ New Sales",
    color: "text-yellow-600",
  },
  {
    title: "Customer",
    value: "39,354",
    subtext: "30+ new in 2 days",
    color: "text-blue-600",
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {stats.map((item, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-6">
          <h4 className="text-sm font-semibold text-gray-600">{item.title}</h4>
          <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
          <p className="text-sm text-gray-500">{item.subtext}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
