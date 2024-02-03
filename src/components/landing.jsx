import React, { useState } from "react";
import Hero from "./hero";
import About from "./about";
import Previous from "./previous/previous_year";
import FAQPage from "./FAQ/FAQ";
import Contact from "./contact/contact";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import Loader from "./loader/loader";
import CommPart from "./commpart/commpart";

export default function landing() {
  return (
      <>
      <Hero />
      <About />
      <Previous />
      <CommPart/>
      <FAQPage />
      <Contact />
      <Footer />
   </>
  );
}
