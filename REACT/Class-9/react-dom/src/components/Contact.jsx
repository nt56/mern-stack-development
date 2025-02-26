import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5 min-vh-100">
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary mb-4">Contact Us</h2>
        <p className="lead text-center">
          Have questions or need support? Feel free to reach out to us. We're
          here to help!
        </p>

        <h4 className="mt-4 text-success">Contact Details:</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">📍 Location: Pune, India</li>
          <li className="list-group-item">
            📧 Email: support@productstore.com
          </li>
          <li className="list-group-item">📞 Phone: +91 98765 43210</li>
        </ul>

        <h4 className="mt-4 text-success">Send Us a Message:</h4>
        <form className="mt-3">
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>

        <p className="mt-4 text-muted text-center">
          We’ll get back to you as soon as possible. Thank you for reaching out!
        </p>
      </div>
    </div>
  );
};

export default Contact;
