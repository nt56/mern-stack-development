const Products = ({ name, photo, btn1, btn2 }) => {
  return (
    <>
      <div className="card col-md-3 m-3 ">
        <div className="card-header text-center">
          <h3>{name}</h3>
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
          <button className="btn btn-sm btn-outline-dark px-3  fw-bold">
            {btn2}
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
