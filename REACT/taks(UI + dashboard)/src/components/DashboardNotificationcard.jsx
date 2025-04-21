export const DashboardNotificationcard = () => (
  <div className="flex flex-col md:flex-row gap-6">
    <div className="bg-white shadow rounded-xl p-6 flex-1">
      <div className="flex items-center gap-2">
        <span className="text-yellow-500">🔔</span>
        <div>
          <div className="font-medium">
            Start your day with New Notification.
          </div>
          <div className="text-sm text-blue-600">
            You have{" "}
            <a href="#" className="">
              2 new notification
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white shadow rounded-xl p-6 flex-1">
      <div className="flex items-center gap-2">
        <span className="text-green-600">💡</span>
        <div>
          <div className="font-medium">
            Monitor your Sales and Profitability
          </div>
          <div className="text-sm text-blue-600">
            You have{" "}
            <a href="#" className="">
              View Performance
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
