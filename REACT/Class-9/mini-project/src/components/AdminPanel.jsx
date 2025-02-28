import React from "react";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminPanel;
