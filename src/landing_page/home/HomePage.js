import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import Stats from "./Stats";
import Pricing from "./Pricing";

import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Navbar from "../Navbar";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Navbar />
      <Pricing />
      <Education />
      <OpenAccount />
      <Navbar />
      <Footer />
    </>
  );
}

export default HomePage;
