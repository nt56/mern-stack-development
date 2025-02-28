import React from "react";

const Products = ({ name, photo, btn1, btn2 }) => {
  return (
    <>
      <div
        className="shadow-lg card col-md-3 m-3 transition cursor-pointer"
        style={{ transition: "transform 0.3s ease-in-out" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div className="card-header text-center">
          <h3 className="fw-bold">{name}</h3>
        </div>

        <div className="card-body text-center">
          <img
            src={photo}
            alt="product-photo"
            className="img-fluid"
            style={{ height: "260px" }}
          />
        </div>

        <div className="card-footer text-center">
          <button className="btn btn-sm btn-danger px-3 mx-2 fw-bold">
            {btn1}
          </button>
          <button className="btn btn-sm btn-outline-dark px-3 fw-bold">
            {btn2}
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
