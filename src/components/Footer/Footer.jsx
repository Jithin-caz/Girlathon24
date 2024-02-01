import "./Footer.css";

import React from "react";

export default function Footer() {
  return (
    <div className="Footer row" style={{ margin: "0px" }}>
      <div className="Footer-Top">
        <a href="#">
          <img src="/images/GDSC.png" alt="" />
          <span>GDSC MACE</span>
        </a>
        <p>Connect with Us</p>
        <div className="social">
          <a href="https://x.com/gdsc_mace?s=20">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="https://www.instagram.com/gdsc_mace?igsh=MTIwaTdwY3IwaWJnZw==">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/gdsc-mace/">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="Footer-Bottom">
        <p>
          &#169;Copyright GDSC MACE. All Rights Reserved. <br />
          Designed by Team Girlathon
        </p>
      </div>
    </div>
  );
}
