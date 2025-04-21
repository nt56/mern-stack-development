import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const revenueData = [
  { month: "Jan", income: 30, expense: 76 },
  { month: "Feb", income: 38, expense: 32 },
  { month: "Mar", income: 28, expense: 45 },
  { month: "Apr", income: 46, expense: 77 },
  { month: "May", income: 42, expense: 34 },
  { month: "Jun", income: 65, expense: 44 },
  { month: "Jul", income: 95, expense: 39 },
];

export default function DashboardRevenueChart() {
  return (
    <div className="w-full h-96 p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold">Revenue</h2>
      <p className="text-sm text-green-600">(+63%) than last year</p>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[20, 100]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            name="Total Income"
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#facc15"
            name="Total Expense"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
