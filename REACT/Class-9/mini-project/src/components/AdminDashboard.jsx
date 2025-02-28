import React from "react";

const AdminDashboard = () => {
  return (
    <div className="container mt-4 d-flex flex-column align-items-center min-vh-100">
      <h2 className="text-center fw-bold fs-14 p-10">Admin Dashboard</h2>
      <div className="d-flex flex-column gap-5 w-50">
        <div className="card p-3 shadow-sm">
          <h5>Users</h5>
          <p>Manage registered users</p>
        </div>
        <div className="card p-3 shadow-sm">
          <h5>Settings</h5>
          <p>Update application settings</p>
        </div>
        <div className="card p-3 shadow-sm">
          <h5>Reports</h5>
          <p>View system reports</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
