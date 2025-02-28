import React from "react";

const Services = () => {
  return (
    <div className="container mt-5 min-vh-100">
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary mb-4">Our Services</h2>
        <p className="lead text-center">
          We offer a range of services to enhance your shopping experience.
          Explore our services designed to make your product selection and
          purchase easier.
        </p>

        <h4 className="mt-4 text-success">Our Key Services:</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">🛍️ Product Browsing & Filtering</li>
          <li className="list-group-item">📦 Fast & Secure Checkout</li>
          <li className="list-group-item">💳 Multiple Payment Options</li>
          <li className="list-group-item">🚀 Express Delivery</li>
          <li className="list-group-item">📞 24/7 Customer Support</li>
          <li className="list-group-item">🔄 Easy Returns & Refunds</li>
        </ul>

        <p className="mt-4 text-muted text-center">
          We aim to provide the best online shopping experience. Let us know how
          we can help!
        </p>
      </div>
    </div>
  );
};

export default Services;
