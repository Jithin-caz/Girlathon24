import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar/navbar";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Signin from "./components/SIgnIn/signin";
import IdeaSubmission from "./components/IdeaSubmission/IdeaSubmission";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import landing from "./components/landing";
import DashInd from "./components/dash/dashInd";
import ResetPass from "./components/SIgnIn/resetpass";

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
        <Route path="/dash" exact Component={DashInd}/>
        <Route path="/ideaSumbit" exact Component={IdeaSubmission}/>
        <Route path="/resetPassword" exact Component={ResetPass}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
