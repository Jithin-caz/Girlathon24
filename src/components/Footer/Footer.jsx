import "./Footer.css";

import React from "react";

export default function Footer() {
  return (
    <div className="Footer row" style={{ margin: "0px"}}>
      <div className="Footer-Top">
        <a href="#">
          <img src="/images/GDSC.png" alt="" />
          <span>GDSC MACE</span>
        </a>
        <p>Connect with Us</p>
        <div className="social">
          <a href="https://x.com/gdsc_mace?s=20"  target="_blank">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.instagram.com/gdsc_mace?igsh=MTIwaTdwY3IwaWJnZw=="  target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/gdsc-mace/"  target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="Footer-Bottom">
        <p style={{ color:'white' }}>
          &#169;Copyright GDSC MACE. All Rights Reserved. <br />
          Designed by <a href="https://github.com/abhinav-18max/girlathon-portal" target="_blank" style={{ cursor:'none' }}>Team Girlathon</a>
        </p>
      </div>
    </div>
  );
}
