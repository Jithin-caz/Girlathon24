import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/Navbar/navbar";
import About from "./components/about";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
