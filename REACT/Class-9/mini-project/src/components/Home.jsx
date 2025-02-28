import React from "react";
import Products from "./Products";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      food: true,
      electronics: true,
      book: true,
      other: true,
    };
  }

  handleFoodProducts = () => {
    this.setState({
      food: true,
      electronics: false,
      other: false,
      book: false,
    });
  };

  handleBookProducts = () => {
    this.setState({
      book: true,
      electronics: false,
      other: false,
      food: false,
    });
  };

  handleElectronicsProducts = () => {
    this.setState({
      food: false,
      electronics: true,
      other: false,
      book: false,
    });
  };

  handleOtherProducts = () => {
    this.setState({
      food: false,
      electronics: false,
      other: true,
      book: false,
    });
  };

  render() {
    const foodProducts = [
      {
        id: 1,
        name: "KFC ",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 2,
        name: "Burger",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 3,
        name: "Pizza",
        img: "https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_5QC4HBC039RJ406SQH4UBH3695-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXb",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 4,
        name: "Chicken",
        img: "https://assets.epicurious.com/photos/663552459a068917f23d1e92/4:3/w_3830,h_2872,c_limit/cornell-bbq-chicken_RECIPE_042524_5318_VOG_final.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 5,
        name: "Paneer",
        img: "https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES-819x1024.jpeg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 6,
        name: "Egg",
        img: "https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_245119171-min-1.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
    ];

    const electronicsProducts = [
      {
        id: 1,
        name: "Samsung s24",
        img: "https://m.media-amazon.com/images/I/71uqj6BKnRL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 2,
        name: "Iphone 16",
        img: "https://m.media-amazon.com/images/I/619oqSJVY5L._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 3,
        name: "Fastrack Watch",
        img: "https://m.media-amazon.com/images/I/61rbYFj7DgL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 4,
        name: "Boat Watch",
        img: "https://m.media-amazon.com/images/I/61Fwv0TtQnL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 5,
        name: "Boat Speaker",
        img: "https://m.media-amazon.com/images/I/71-I9Bk8dgL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 6,
        name: "JBL Speaker",
        img: "https://m.media-amazon.com/images/I/51waOv47fqL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 7,
        name: "Boat HeadSet",
        img: "https://m.media-amazon.com/images/I/51FNnHjzhQL._AC_UY218_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
    ];

    const otherProducts = [
      {
        id: 1,
        name: "Campus Shoes",
        img: "https://m.media-amazon.com/images/I/61CcXNL-ANL._AC_UL320_.jpg",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 2,
        name: "T-Shirt",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/x/u/l-tblhn-dp1-d144-tripr-original-imah888zbpdmepmq.jpeg?q=70",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 3,
        name: "Bottol",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-bottle/j/k/0/720-new-insulated-bottle-for-school-collage-and-travelling-1-original-imah7uzzrn88ubhj.jpeg?q=70",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 4,
        name: "Sunglass",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/j/q/x/p429gr3v-one-size-fits-all-fastrack-original-imagp3eusz94znhy.jpeg?q=70",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 5,
        name: "Bag",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/s/v/2/daily-use-tuition-bag-office-bag-college-backpack-men-women-original-imah8ua7ch3w9k6p.jpeg?q=70",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 6,
        name: "Mouse",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/s/r/f/-original-imagxxghtn7grgyz.jpeg?q=70",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 7,
        name: "Mobile",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/s/r/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-ta-original-imah53fqhhqyadgd.jpeg?q=70",
        btn1: "Add",
        btn2: "Buy Now",
      },
    ];

    const bookProducts = [
      {
        id: 1,
        name: "Ikigai",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/book/a/d/4/ikigai-japanese-art-of-staying-young-while-growing-old-original-imah5p39tykbnshp.jpeg?q=70",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 2,
        name: "Subtle art Of Not Giving",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/book/3/d/c/the-subtle-art-of-not-giving-a-f-ck-original-imah93mvkd4fsknk.jpeg?q=70",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 3,
        name: "Atomic Habits",
        img: "https://rukminim2.flixcart.com/image/200/200/xif0q/icons/original-9782826700289_1.png",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 4,
        name: "How-to-win-friends-and-influence-people",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/book/g/4/e/how-to-win-friends-and-influence-people-original-imagh6apqn2wmwkk.jpeg?q=70&crop=false",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 5,
        name: "The-psychology-of-money",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/book/q/c/r/the-psychology-of-money-original-imah6kcfqawqsgtd.jpeg?q=70",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 6,
        name: "Can't-hurt-me",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/book/o/c/3/can-t-hurt-me-by-david-goggins-hardcover-english-edition-original-imah3kr7cq5n6mub.jpeg?q=70",
        btn1: "Add",
        btn2: "Buy Now",
      },
      {
        id: 7,
        name: "Man-s-search-for-meaning",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/book/c/t/f/man-s-search-for-meaning-original-imah9bc2mvb8hnw6.jpeg?q=70",
        btn1: "Add",
        btn2: "Buy Now",
      },
    ];

    return (
      <>
        <div className="d-flex flex-column min-vh-100 container-fluid pb-5">
          <div className="d-flex justify-content-center gap-5 my-5">
            <button
              className="shadow-lg btn btn-outline-warning fw-bold"
              style={{ width: "200px" }}
              onClick={() => this.handleElectronicsProducts()}
            >
              Electronics
            </button>
            <button
              style={{ width: "200px" }}
              className="shadow-lg btn btn-outline-warning fw-bold"
              onClick={() => this.handleFoodProducts()}
            >
              Foods
            </button>
            <button
              style={{ width: "200px" }}
              className="shadow-lg btn btn-outline-warning fw-bold"
              onClick={() => this.handleBookProducts()}
            >
              Books
            </button>
            <button
              style={{ width: "200px" }}
              className="shadow-lg btn btn-outline-warning fw-bold"
              onClick={() => this.handleOtherProducts()}
            >
              Others
            </button>
          </div>

          <div className="d-flex flex-wrap justify-content-center bg-light-subtle object-fit-contain">
            {this.state.food &&
              foodProducts.map((p) => (
                <Products
                  key={p.id}
                  name={p.name}
                  photo={p.img}
                  btn1={p.btn1}
                  btn2={p.btn2}
                />
              ))}

            {this.state.electronics &&
              electronicsProducts.map((p) => (
                <Products
                  key={p.id}
                  name={p.name}
                  photo={p.img}
                  btn1={p.btn1}
                  btn2={p.btn2}
                />
              ))}

            {this.state.book &&
              bookProducts.map((p) => (
                <Products
                  key={p.id}
                  name={p.name}
                  photo={p.img}
                  btn1={p.btn1}
                  btn2={p.btn2}
                />
              ))}

            {this.state.other &&
              otherProducts.map((p) => (
                <Products
                  key={p.id}
                  name={p.name}
                  photo={p.img}
                  btn1={p.btn1}
                  btn2={p.btn2}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
