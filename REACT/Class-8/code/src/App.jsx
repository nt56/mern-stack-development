import React from "react";
import Product from "./Product";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const productLists = [
      {
        id: 1,
        name: "KFC ",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 2,
        name: "Berger",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 3,
        name: "Samsung s24",
        img: "https://m.media-amazon.com/images/I/71uqj6BKnRL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 4,
        name: "Iphone 16",
        img: "https://m.media-amazon.com/images/I/619oqSJVY5L._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 5,
        name: "Fastrack Watch",
        img: "https://m.media-amazon.com/images/I/61rbYFj7DgL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 6,
        name: "Boat Watch",
        img: "https://m.media-amazon.com/images/I/61Fwv0TtQnL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 7,
        name: "Boat Speaker",
        img: "https://m.media-amazon.com/images/I/71-I9Bk8dgL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 8,
        name: "JBL Speaker",
        img: "https://m.media-amazon.com/images/I/51waOv47fqL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 9,
        name: "Boat HeadSet",
        img: "https://m.media-amazon.com/images/I/51FNnHjzhQL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 10,
        name: "Campus Shoes",
        img: "https://m.media-amazon.com/images/I/61CcXNL-ANL._AC_UL320_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
    ];

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center mb-3 p-3 bg-dark">
              <h1 className="text-white fw-bold ">Ecommerce Products</h1>
            </div>
          </div>

          <div className="col-md-12 bg-light-subtle object-fit-contain">
            <div className="row justify-content-center">
              {productLists.map((p) => (
                <Product
                  key={p.id}
                  name={p.name}
                  photo={p.img}
                  btn1={p.btn1}
                  btn2={p.btn2}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
