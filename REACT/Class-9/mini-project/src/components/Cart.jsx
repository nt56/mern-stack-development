import React from "react";

const Cart = () => {
  return (
    <div className="container text-center mt-5 min-vh-100">
      <img
        className="img-fluid mx-auto d-block"
        src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
        alt="empty-cart-img"
        style={{ maxWidth: "200px" }}
      />
      <h1 className="fw-bold text-danger mt-3">
        Cart is empty... Please add items to the cart!
      </h1>
    </div>
  );
};

export default Cart;
