import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <div className="card bg-base-300 shadow-lg p-6">
        <h1 className="text-3xl font-bold text-primary">About This App</h1>
        <p className="text-gray-300 mt-4">
          This is a simple **CRUD (Create, Read, Update, Delete) Application**
          built using **React, JSON Server, and React Router**. It allows users
          to **add, edit, delete, and view users** seamlessly.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Tech Stack:</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-300">
          <li>⚛️ React (Frontend)</li>
          <li>🌐 JSON Server (Backend API)</li>
          <li>🚀 React Router (Navigation)</li>
          <li>🎨 Daisy UI & Tailwind CSS (Styling)</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-4">Features:</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-300">
          <li>📝 Add new users</li>
          <li>✏️ Edit user details</li>
          <li>❌ Delete users</li>
          <li>📋 View all users</li>
        </ul>
        <div className="mt-6 flex justify-center">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Explore Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
