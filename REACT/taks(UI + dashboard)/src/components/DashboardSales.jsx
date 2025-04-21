import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const salesData = [
  { name: "Shippings", value: 32.98 },
  { name: "Refunds", value: 11.0 },
  { name: "Order", value: 14.87 },
  { name: "Income", value: 12.0 },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444", "#3b82f6"];

export default function DashboardSales() {
  return (
    <div className="w-full h-96 p-4 bg-white rounded-xl shadow flex flex-col">
      <h2 className="text-xl font-semibold">Total Sales</h2>
      <div className="text-3xl font-bold">9600</div>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={salesData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {salesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Moved below the chart */}
      <ul className="mt-4 text-sm space-y-1">
        {salesData.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[idx] }}
              ></span>
              {item.name}
            </span>
            <span>${item.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
