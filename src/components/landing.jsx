import React, { useState } from "react";
import Hero from "./hero";
import About from "./about";
import Previous from "./previous/previous_year";
import FAQPage from "./FAQ/FAQ";
import Contact from "./contact/contact";
import Footer from "./Footer/Footer";
import Whypart from "./whypart";

export default function landing() {
  return (
    <>
      <Hero />
      <About />
      <Previous />
      <FAQPage />
      <Whypart/>
      <Contact />
      <Footer />
    </>
  );
}
