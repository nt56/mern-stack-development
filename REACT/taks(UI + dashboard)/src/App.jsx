import TopBar from "./components/TopBar";
import Header from "./components/Header";
import DropDowns from "./components/DropDowns";
import HeroCarousel from "./components/HeroCarousel";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Section from "./components/Section";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import useFetchProducts from "./hooks/useFetchProducts";

const App = () => {
  //cutom hook called useFetchProducts
  const productList = useFetchProducts();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="flex flex-col w-[70%] mx-auto font-inter gap-5">
                <TopBar />
                <Header />
                <DropDowns />
                <HeroCarousel />
                <Section productList={productList} />
                <Products productList={productList} />
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
