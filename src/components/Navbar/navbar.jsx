import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [topvis, setTopVis] = useState(true);
  const [Nav, setNav] = useState(true);
  const setNavigation = () => {
    setNav(!Nav);
  };

  //

  const [activeSection, setActiveSection] = useState("HERO");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = sectionTop + section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //

  return (
    <div>
      <section className="navigation row">
        <NavLink
          to="/"
          className="logo col"
          style={{ height: "2rem", display: "flex", alignItems: "center" }}
        >
          <img src="/images/GDSC.png" style={{ height: "190%" }} alt="" />
        </NavLink>

        <div className="navigation-links col">
          <ul>
            <li
              id="hero-a"
              className={`lin ${
                activeSection === "HERO" ? "link-active" : "link-passive"
              }`}
            >
              <a href="#HERO">Home</a>
            </li>
            <li
              id="hero-nav"
              style={{ display: "none" }}
              className={`lin ${
                activeSection === "HERO" ? "link-active" : "link-passive"
              }`}
            >
              <NavLink
                to="/"
                onClick={() => {
                  document.getElementById("hero-nav").style.display = "none";
                  document.getElementById("hero-a").style.display = "block";
                  setTopVis(true);
                }}
              >
                Home
              </NavLink>
            </li>
            <a href="#ABOUT">
              {" "}
              <li
                className={`lin ${
                  activeSection === "ABOUT" ? "link-active" : "link-passive"
                }`}
              >
                About
              </li>
            </a>
            <a href="#SPONSERS">
              {" "}
              <li
                className={`lin ${
                  activeSection === "SPONSERS" ? "link-active" : "link-passive"
                }`}
              >
                Sponsors
              </li>
            </a>
            <a href="#FAQ">
              {" "}
              <li
                className={`lin ${
                  activeSection === "FAQ" ? "link-active" : "link-passive"
                }`}
              >
                FAQ
              </li>
            </a>

            <a href="#CONTACT">
              {" "}
              <li
                className={`lin ${
                  activeSection === "CONTACT" ? "link-active" : "link-passive"
                }`}
              >
                Contact
              </li>
            </a>
            <NavLink
              to="/Signin"
              onClick={() => {
                document.getElementById("hero-nav").style.display = "block";
                document
                  .getElementById("hero-nav")
                  .classList.remove("link-active");
                document.getElementById("hero-a").style.display = "none";
                setTopVis(false);
                // console.log("Jithin")
              }}
            >
              {" "}
              {/* <li className="register">Register</li> */}
            </NavLink>
          </ul>
        </div>
      </section>
      <div className="navigation-mobile-menu">
        <NavLink
          to="/"
          className="logo col"
          style={{ height: "2rem", display: "flex", alignItems: "center" }}
        >
          <img src="/images/GDSC.png" style={{ height: "190%" }} alt="" />
        </NavLink>
        <i
          className={`bi bi-list list${Nav ? "nav-active" : ""}`}
          onClick={setNavigation}
        ></i>
        <i
          className={`bi bi-x close${Nav ? "" : "nav-active"}`}
          onClick={setNavigation}
        ></i>
      </div>
      <section
        className={`${
          Nav ? "navigation-list-mobile" : "navigation-list-mobile-active"
        }`}
      >
        <ul>
          <li className="lin" id="hero-amob">
            <a href="#HERO" onClick={setNavigation}>
              Home
            </a>
          </li>

          <li id="hero-navmob" style={{ display: "none" }} className={`lin`}>
            <NavLink
              to="/"
              onClick={() => {
                setNavigation();
                document.getElementById("hero-navmob").style.display = "none";
                document.getElementById("hero-amob").style.display = "block";
                setTopVis(true);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="lin">
            <a href="#ABOUT" onClick={setNavigation}>
              About
            </a>
          </li>
          <li className="lin">
            <a href="#SPONSERS" onClick={setNavigation}>
              Sponsors
            </a>
          </li>
          <li className="lin">
            <a href="#FAQ" onClick={setNavigation}>
              FAQ
            </a>
          </li>

          <li className="lin">
            <a href="#CONTACT" onClick={setNavigation}>
              Contact
            </a>
          </li>
          {/* <li
            className="register"
            onClick={() => {
              document.getElementById("hero-navmob").style.display = "block";
              document.getElementById("hero-amob").style.display = "none";
            }}
          >
            <Link
              to="/Signin"
              onClick={() => {
                setNavigation();
                setTopVis(false);
              }}
            >
              Register
            </Link>
          </li> */}
        </ul>
      </section>
      {activeSection != "HERO" && topvis && (
        <a
          href="#HERO"
          className="back-to-top"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "1rem",
            zIndex: "100",
          }}
        >
          <button className="button-top">
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
          </button>
        </a>
      )}
    </div>
  );
}
