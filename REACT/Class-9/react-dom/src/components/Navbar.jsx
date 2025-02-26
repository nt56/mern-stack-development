import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body p-2"
        data-bs-theme="dark"
      >
        <div className="container-fluid d-flex py-1">
          {/* Product Store Title Centered */}
          <Link
            to="/"
            className="navbar-brand text-center fw-bold fs-3 text-warning"
          >
            🛒 Product <span className="text-danger">Store</span>
          </Link>

          {/* Navbar Toggle Button for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Centered Navigation Items */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex gap-5 fw-bold">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <button className="btn btn-outline-light" type="submit">
              Login
            </button>
            <button className="btn btn-outline-light" type="submit">
              Signup
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
