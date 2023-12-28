import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [Nav, setNav] = useState(true);
  const setNavigation = () => {
    setNav(!Nav);
  };

  //

  const [activeSection, setActiveSection] = useState("");

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
        <div className="logo col">LOGO</div>
        <div className="navigation-links col">
          <ul>
            <li
              className={`lin ${
                activeSection === "HERO" ? "link-active" : "link-passive"
              }`}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className={`lin ${
                activeSection === "ABOUT" ? "link-active" : "link-passive"
              }`}
            >
              <a href="#ABOUT">About</a>
            </li>
            <li
              className={`lin ${
                activeSection === "FAQ" ? "link-active" : "link-passive"
              }`}
            >
              <a href="#FAQ">FAQ</a>
            </li>
            <li className="lin">
              <a href="">Sponsors</a>
            </li>
            <li
              className={`lin ${
                activeSection === "CONTACT" ? "link-active" : "link-passive"
              }`}
            >
              <a href="#CONTACT">Contact</a>
            </li>
            <li className="register">
              <Link to="/Signin">Register</Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="navigation-mobile-menu">
        <div className="logo-mobile">LOGO</div>
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
          <li className="lin">
            <a href="#">Home</a>
          </li>
          <li className="lin">
            <a href="#ABOUT">About</a>
          </li>
          <li className="lin">
            <a href="">Speakers</a>
          </li>
          <li className="lin">
            <a href="">Sponsors</a>
          </li>
          <li className="lin">
            <a href="#CONTACT">Contact</a>
          </li>
          <li className="register">
            <a href="">Register</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
