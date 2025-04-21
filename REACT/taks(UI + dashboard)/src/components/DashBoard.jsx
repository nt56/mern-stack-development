import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardTopNavbar from "./DashboardTopNavbar";
import DashboardWelcome from "./DashboardWelcome";
import DashboardCards from "./DashboardCards";
import DashboardRevenueChart from "./DashboardRevenueChart";
import DashboardSales from "./DashboardSales";
import { DashboardSalesOverview } from "./DashboardSalesOverview";
import { DashboardNotificationcard } from "./DashboardNotificationcard";
import { DashboardRecentOrders } from "./DashboardRecentOrders";

const DashBoard = () => {
  return (
    <div className="flex ">
      <DashboardSidebar />
      <main className="flex flex-col items-center justify-center bg-gray-50 min-h-screen w-full">
        <DashboardTopNavbar />
        <div className="p-6 w-[80%]">
          <DashboardWelcome />
          <DashboardCards />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <DashboardRevenueChart />
            </div>
            <div className="lg:col-span-1">
              <DashboardSales />
            </div>
          </div>
          <div className="lg:col-span-1 space-y-6">
            <DashboardSalesOverview />
            <DashboardNotificationcard />
            <DashboardRecentOrders />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
