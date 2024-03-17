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
import CommPart2 from "./commpart/commpart2";
import Timeline from "./TImeline/Timeline";
import Tracks from "./tracks/tracks";
import Media from "./commpart/media";
import Certificate from "./commpart/Certificate";
import Prize from "./prize";

export default function landing() {
  return (
    <div style={{ overflow: "clip" }}>
      <Hero />
      <About />
      <Prize />
      <Previous />
      <Timeline />
      <Tracks />
      <CommPart />
      <CommPart2 />
      <Media />
      <Certificate />
      <FAQPage />
      <Contact />
      <Footer />
    </div>
  );
}
