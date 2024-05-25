import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Pages/Landing/Landing";
import SingIn from "./Components/Pages/Auth/SingUp";
import Payment from "./Components/Pages/Payment/Payment";
import Orders from "./Components/Pages/Orders/Orders";
import Cart from "./Components/Pages/Cart/Cart";
import Results from "./Components/Pages/Results/Results";
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail";
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<SingIn />} />
        <Route path="/Payments" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Category/:CategoryName" element={<Results />} />
        <Route path="/Products/:ProductId" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
