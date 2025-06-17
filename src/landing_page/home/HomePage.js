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
      <Navbar />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
