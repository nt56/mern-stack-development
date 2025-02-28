import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="p-4 fw-bold">
        Page Not Found <span className="text-danger">404</span>
      </h1>
      <p>
        Looking for something? <br />
        We&apos;re sorry. The web address you entered is not a functioning page
        on our site.
      </p>
      <NavLink to="/">
        <button className="btn btn-danger btn-sm my-4 fw-bold px-4">
          Go To Home Page
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
