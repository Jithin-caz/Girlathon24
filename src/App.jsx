import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
