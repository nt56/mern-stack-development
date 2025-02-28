import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const adminLoginHandler = (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (email === "admin@gmail.com" && pass === "admin@123") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credintials");
    }
  };

  return (
    <div className="container pb-5 d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-5 shadow-lg"
        style={{ transition: "transform 0.3s ease-in-out", width: "500px" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            onClick={adminLoginHandler}
            type="submit"
            className="btn my-3 btn-primary w-100"
          >
            Login
          </button>
          <Link to="/">
            <button type="submit" className="btn btn-primary w-100">
              Home
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
