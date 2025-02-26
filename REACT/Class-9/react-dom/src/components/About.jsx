import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-5 min-vh-100">
      <div className="d-flex justify-content-center justify-items-center card shadow-lg p-5">
        <h2 className="text-center text-primary mb-4">About Product Store</h2>
        <p className="lead text-center">
          <strong>Product Store</strong> is a simple and responsive product
          listing web application designed for users to browse and filter
          different categories of products. The main goal of this project is to
          provide an easy-to-use interface for viewing and interacting with
          products.
        </p>

        <h4 className="mt-4 text-success">Features:</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            ✅ Filter products by category (Food, Electronics, Others)
          </li>
          <li className="list-group-item">
            ✅ Responsive and user-friendly design
          </li>
          <li className="list-group-item">
            ✅ Interactive buttons to add or purchase products
          </li>
          <li className="list-group-item">
            ✅ Built using modern frontend technologies
          </li>
        </ul>

        <h4 className="mt-4 text-success">Technologies Used:</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">⚡ HTML, CSS, Bootstrap</li>
          <li className="list-group-item">⚡ JavaScript (ES6)</li>
          <li className="list-group-item">⚡ React.js</li>
        </ul>

        <p className="mt-4 text-muted text-center">
          This project is ideal for learning how to integrate React with
          Bootstrap and manage state effectively to build dynamic web
          applications.
        </p>
      </div>
    </div>
  );
};

export default About;
