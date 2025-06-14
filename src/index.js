import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomePage />
    <AboutPage />
    <PricingPage />
    <ProductsPage />
    <Signup />
    <SupportPage />
  </React.StrictMode>
);
