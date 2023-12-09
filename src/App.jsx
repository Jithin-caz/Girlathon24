import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/Navbar/navbar";
import About from "./components/about";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Previous from "./components/previous_year";
import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/contact";

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".fade-up", {
      delay: 300,
      distance: "50px",
      origin: "bottom",
      opacity: 0,
      duration: 900,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Previous />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
