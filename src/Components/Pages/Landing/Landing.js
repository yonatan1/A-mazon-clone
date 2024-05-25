import React from "react";
import Carousel from "../../../Components/Carousel/CarouselEffect";
import Layout from "../../Layout/Layout";
import Product from "../../Product/Product";
import Category from "../../Category/Category";
function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
