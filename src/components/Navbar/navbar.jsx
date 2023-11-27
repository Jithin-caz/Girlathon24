import React, { useState } from "react";
import "./navbar.css";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  const [Nav, setNav] = useState(true);
  const setNavigation = () => {
    setNav(!Nav);
  };

  return (
    <div >
      <section className="navigation row">
        <div className="logo col">LOGO</div>
        <div className="navigation-links col">
          <ul>
            <li className="lin">Home</li>
            <li className="lin">About</li>
            <li className="lin">Speakers</li>
            <li className="lin">Sponsors</li>
            <li className="lin">Contact</li>
            <li className="register">Register</li>
          </ul>
        </div>
      </section>
      <div className="navigation-mobile-menu">
        <div className="logo-mobile">LOGO</div>
        <i
          className={`bi bi-list list${Nav ? "active" : ""}`}
          onClick={setNavigation}
        ></i>
        <i
          className={`bi bi-x close${Nav ? "" : "active"}`}
          onClick={setNavigation}
        ></i>
      </div>
      <section
        className={`${
          Nav ? "navigation-list-mobile" : "navigation-list-mobile-active"
        }`}
      >
        <ul>
          <li className="lin">Home</li>
          <li className="lin">About</li>
          <li className="lin">Speakers</li>
          <li className="lin">Sponsors</li>
          <li className="lin">Contact</li>
          <li className="register">Register</li>
        </ul>
      </section>
    </div>
  );
}
