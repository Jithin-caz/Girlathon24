import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar/navbar";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Dash from "./components/dash/dash";
import Signin from "./components/signin/signin";
import IdeaSubmission from "./components/IdeaSubmission/IdeaSubmission";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import landing from "./components/landing";

function App() {
 
  useEffect(() => {
    ScrollReveal().reveal(".fade-up", {
      delay: 300,
      distance: "60px",
      origin: "bottom",
      opacity: 0,
      duration: 800,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    }
    );
  }, []);
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/" exact Component={landing}/>
        <Route path="/Signin" exact Component={Signin}/>
        <Route path="/dash/:Id" exact Component={Dash}/>
        <Route path="/ideaSumbit" exact Component={IdeaSubmission}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
