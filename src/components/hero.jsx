import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [loading, setLoading] = useState(false);

  const scrollDown = () => {
    window.scrollBy({ top: 2000, left: 0, behavior: "smooth" });
  };

  const scrollUp = () => {
    window.scrollBy({ top: -2000, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    devScript();
    generateHexGrid();
  }, []);

  const devScript = () => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    console.log("script devfolio added");

    return () => {
      document.body.removeChild(script);
    };
  };

  const generateHexGrid = () => {
    const hexGrid = document.getElementById("hexGrid");
    const numColumns = 14;
    const numRows = 3;

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        const hexagon = document.createElement("div");
        hexagon.classList.add("hexagon");
        hexagon.style.marginTop = row % 2 === 0 ? "0" : "0vw";
        hexGrid.appendChild(hexagon);
      }
    }
  };

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-06") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <section
      className="hero-bg fade-up"
      id="HERO"
      data-aos="zoom-out-up"
      data-aos-duration="1300"
      data-aos-once="true"
    >
      <img className="hero-image" src="images/backgroundAbstarctV1.png" />

      <div
        className="hero row fade-up"
        data-aos="zoom-out-up"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        <div className="left col-lg-6"></div>

        {/* Responsive Right Section */}
        <div className="right col-lg-6 flex flex-col items-center justify-center text-center px-4 md:items-center md:text-center">
          <div
            className="title fade-up"
            data-aos="zoom-out-up"
            data-aos-duration="1300"
            data-aos-once="true"
            style={{ paddingTop: "1rem" }}
          >
            <h1>GIRLATHON</h1>
            <h2>2025</h2>
          </div>

          <div className="desc">
            <h6 className="typing-animation">
              8 week long learning and hackathon organized by{" "}
              <span className="text-Gdsc">DSC MACE</span>
            </h6>
            <br />
          </div>

          <button
            className="apply-button"
            data-hackathon-slug="girlathon"
            data-button-theme="light"
            style={{
              height: "44px",
              width: "312px",
              zIndex: "100",
              marginTop: "1rem",
            }}
          >
            Apply with devfolio
          </button>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          zIndex: "90",
          top: "25%",
          left: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>

      <div className="hex-grid" id="hexGrid"></div>
    </section>
  );
}

export default Hero;
