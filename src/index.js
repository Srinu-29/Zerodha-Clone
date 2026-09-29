import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./landing_page/signup/SignUp";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage.js";
import ProductsPage from "./landing_page/products/ProductsPage.js";
import SupportPage from "./landing_page/Support/SupportPage";
import NavBar from "./landing_page/NavBar.js";
import Footer from "./landing_page/Footer.js";
import NotFound from "./landing_page/NotFound.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      
      <Route path="/" element={<HomePage />}></Route>1
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="*" element={<NotFound/>}></Route>
     
    </Routes>
     <Footer />
    
  </BrowserRouter>,
);
