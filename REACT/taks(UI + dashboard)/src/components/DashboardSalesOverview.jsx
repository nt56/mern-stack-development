export const DashboardSalesOverview = () => (
  <div className="bg-white shadow rounded-xl mt-5 p-6">
    <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
    <div className="mb-2">
      <span>Total Profit</span>
      <div className="bg-gray-200 rounded-full h-2 w-full mt-1">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: "8.6%" }}
        ></div>
      </div>
      <div className="text-sm text-gray-700 mt-1">$1,619 (8.6%)</div>
    </div>
    <div className="mb-2">
      <span>Total Income</span>
      <div className="bg-gray-200 rounded-full h-2 w-full mt-1">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: "86.4%" }}
        ></div>
      </div>
      <div className="text-sm text-gray-700 mt-1">$3,571 (86.4%)</div>
    </div>
    <div className="mb-2">
      <span>Total Expenses</span>
      <div className="bg-gray-200 rounded-full h-2 w-full mt-1">
        <div
          className="bg-red-500 h-2 rounded-full"
          style={{ width: "74.5%" }}
        ></div>
      </div>
      <div className="text-sm text-gray-700 mt-1">$3,430 (74.5%)</div>
    </div>
  </div>
);
