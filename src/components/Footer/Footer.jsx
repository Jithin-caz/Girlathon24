import "./Footer.css";

import React from "react";

export default function Footer() {
  return (
    <div className="Footer row" style={{ margin:'0px' }}>
      <div className="Footer-Top">
        <a href="#">
          <img src="/images/GDSC.png" alt="" />
          <span>GDSC MACE</span>
        </a>
        <p>Connect with Us</p>
        <div className="social">
          <a href="">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="Footer-Bottom"  >
        <p >
          Copyright GDSC MACE. All Rights Reserved. <br />
          Designed by Team Girlathon
        </p>
      </div>
    </div>
  );
}
