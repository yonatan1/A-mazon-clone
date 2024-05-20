import React from "react";
//import './App.css';
//import Test1 from "./Test/Test1";
//import Test2 from "./Test/Test2";
import Header from "./Components/Header/Header"
import Carousel from "./Components/Carousel/CarouselEffect";
import Category from "./Components/Category/Category"
import Product from "./Components/Product/Product";
//import Category from "./Components/Category/category";

function App() {
  return (
    <div >
      <Header />
      <Carousel />
      <Category/>
      <Product/>
      {/* <Test1 />
      <br />
      <Test2 /> */}
    </div>
  )
}

export default App
