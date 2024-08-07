import React, { useEffect, useState } from "react";
import Header from "../component/Layout/Header";
import Footer from "../component/Layout/Footer";
import ProductDetails from "../component/ProductDetails/ProductDetails";
import { useParams, useSearchParams } from "react-router-dom";
// import { productData } from "../static/data";
import SuggestProduct from "../component/ProductDetails/SuggestProduct";
import { useSelector } from "react-redux";

const ProductDetailPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  // const ProductName = name.replace(/-/g, " ");

  useEffect(() => {
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i._id === id);
      setData(data);
    } else {
      const data = allProducts && allProducts.find((i) => i._id === id);
      setData(data);
    }
  }, [allProducts, allEvents]);
  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {!eventData && <>{data && <SuggestProduct data={data} />}</>}
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
