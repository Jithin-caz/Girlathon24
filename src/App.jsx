import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar/navbar";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

import Signin from "./components/SIgnIn/signin";
import IdeaSubmission from "./components/IdeaSubmission/IdeaSubmission";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import landing from "./components/landing";
import DashInd from "./components/dash/dashInd";
import ResetPass from "./components/SIgnIn/resetpass";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from "./components/loader/loader";
import Hero from "./components/hero.jsx";



function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    AOS.init({
      // Global settings and options go here
    });
    const timer = setTimeout(() => {
      setLoading(true); // Set loading to false after a certain time or when your data has loaded
    }, 250);
    return () => clearTimeout(timer);
  }, []);
  return (
    loading ?
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact Component={landing} />
            <Route path="/Signin" exact Component={landing} />
            <Route path="/dash" exact Component={DashInd} />
            <Route path="/ideaSumbit" exact Component={IdeaSubmission} />
            <Route path="/resetPassword" exact Component={ResetPass} />
          </Routes>
        </BrowserRouter>

      </>
      : <Loader />
  );
}

export default App;
