import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=20");
      const data = await response.json();
      setProductList(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return productList;
};

export default useFetchProducts;
