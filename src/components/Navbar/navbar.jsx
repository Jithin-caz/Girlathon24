import React, { useState } from "react";
import "./navbar.css";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  const [Nav, setNav] = useState(true);
  const setNavigation = () => {
    setNav(!Nav);
  };

  return (
    <header>
      <section className="navigation">
        <div className="logo">LOGO</div>
        <i
          class={`bi bi-list ${Nav ? "bi-active" : ""}`}
          onClick={setNavigation}
        ></i>
        <i
          class={`bi bi-x ${Nav ? "" : "bi-active"}`}
          onClick={setNavigation}
        ></i>
        <div className="navigation-links">
          <ul>
            <li className="lin">Home</li>
            <li className="lin">About</li>
            <li className="lin">Speakers</li>
            <li className="lin">Sponsers</li>
            <li className="lin">Contact</li>
            <li className="register">Register</li>
          </ul>
        </div>
      </section>
    </header>
  );
}
