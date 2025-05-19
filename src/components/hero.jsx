import { useState, useEffect, useRef } from "react";

function Hero() {
  const [loading, setLoading] = useState(false);
  
  const scrollDown = () => {
    window.scrollBy({
      top: 2000,
      left: 0,
      behavior: "smooth",
    });
  };
  
  const scrollUp = () => {
    window.scrollBy({
      top: -2000,
      left: 0,
      behavior: "smooth",
    });
  };

  // Updated Devfolio button implementation
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      console.log("Devfolio script loaded");
      let attempts = 0;
      const tryInit = () => {
        attempts++;
        console.log(`Attempting to initialize Devfolio (attempt ${attempts})`);
        const button = document.getElementById("devfolio-apply-now");
        if (window.devfolio && button) {
          window.devfolio.init({
            buttonSelector: "#devfolio-apply-now",
          });
          console.log("✅ Devfolio initialized");
        } else if (attempts < 10) {
          setTimeout(tryInit, 300);
        } else {
          console.error("❌ Failed to initialize Devfolio after multiple attempts");
        }
      };
      setTimeout(tryInit, 100);
    };
  }, []);

  // Generate hex grid
  useEffect(() => {
    generateHexGrid();
    
    // Regenerate hex grid on window resize
    window.addEventListener("resize", generateHexGrid);
    return () => {
      window.removeEventListener("resize", generateHexGrid);
    };
  }, []);
  
  const generateHexGrid = () => {
    const hexGrid = document.getElementById("hexGrid");
    if (!hexGrid) return;

    hexGrid.innerHTML = ""; // Clear old hexagons

    const numColumns = 14;
    const numRows = 6; // Increased rows for better visibility
    
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        const hexagon = document.createElement("div");
        hexagon.classList.add("hexagon");
        
        // Offset every other row for hex pattern
        hexagon.style.marginLeft = row % 2 === 0 ? "0" : "2.5%";
        
        // Add some randomized animation delay for visual effect
        const delay = Math.random() * 3;
        hexagon.style.animationDelay = `${delay}s`;
        
        hexGrid.appendChild(hexagon);
      }
      
      // Add a row break for proper grid layout
      const breakDiv = document.createElement("div");
      breakDiv.classList.add("hex-row-break");
      hexGrid.appendChild(breakDiv);
    }
  };

  // Timer code
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-04-06") - +new Date();
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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <section
      className="hero-bg fade-up"
      id="HERO"
      data-aos="zoom-out-up"
      data-aos-duration="1300"
      data-aos-once="true"
    >
      <img className="hero-image" src="images/backgroundAbstarctV1.png" alt="Abstract background" />

      <div
        className="hero row fade-up"
        data-aos="zoom-out-up"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        <div className="left col-lg-6"></div>

        <div className="right col-lg-6">
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
              9 week long learning and hackathon organized by{" "}
              <span className="text-Gdsc">DSC MACE</span>
            </h6>
            <br />
          </div>
          
          {/* Devfolio Apply Button - completely revised implementation */}
          <div className="apply-button-container">
            <div 
              className="apply-button" 
              id="devfolio-apply-now"
              data-hackathon-slug="girlathon" 
              data-button-theme="light"
              style={{ 
                height: "44px", 
                width: "312px", 
                zIndex: 100, 
                position: "relative",
                margin: "20px auto"
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Hex Grid Container - properly structured for visibility */}
      <div className="hex-grid-container">
        <div className="hex-grid" id="hexGrid"></div>
      </div>
      
      {/* Additional CSS for Hex Grid - This would normally go in your CSS file */}
      <style jsx>{`
        .hex-grid-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }
        
        .hex-grid {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          height: 100%;
          justify-content: center;
        }
        
        .hexagon {
          width: 5vw;
          height: 5.77vw; /* height = width * sin(60°) */
          background-color: rgba(255, 255, 255, 0.05);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          margin: 0.5vw;
          animation: pulse 3s infinite alternate;
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        
        .hexagon:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
          opacity: 0.7;
        }
        
        .hex-row-break {
          flex-basis: 100%;
          width: 0;
          height: 0;
        }
        
        @keyframes pulse {
          0% {
            opacity: 0.1;
          }
          100% {
            opacity: 0.4;
          }
        }
        
        /* Fix for Devfolio button */
        .apply-button-container {
          margin-top: 20px;
          position: relative;
          z-index: 100;
        }
      `}</style>
    </section>
  );
}

export default Hero;