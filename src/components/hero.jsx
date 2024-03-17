import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [loading, setLoading] = useState(false);
  const scrollDown = () => {
    // Specify the number of pixels to scroll
    const pixelsToScroll = 2000;

    // Scroll down by the specified number of pixels
    window.scrollBy({
      top: pixelsToScroll,
      left: 0,
      behavior: "smooth", // Optional: adds smooth scrolling animation
    });
  };
  const scrollUp = () => {
    // Specify the number of pixels to scroll
    const pixelsToScroll = -2000;

    // Scroll down by the specified number of pixels
    window.scrollBy({
      top: pixelsToScroll,
      left: 0,
      behavior: "smooth", // Optional: adds smooth scrolling animation
    });
  };
  useEffect(() => {
    // scrollDown()
    // const timer = setTimeout(() => {
    //   scrollUp()
    // }, 1000);

    generateHexGrid();
  }, []);

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

  //timer code

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
  let hex = [];
  for (let i = 0; i < 100; i++) hex.push("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <section
      className="hero-bg fade-up"
      id="HERO"
      data-aos="zoom-out-up"
      data-aos-duration="1300"
      data-aos-once="true"
    >
      <img className="hero-image" src="images/backgroundAbstarct.png" />
      <div className="hex-grid" id="hexGrid">
        {/* <Link to="/Signin" className="reg-btn">
          Regsister Now &#8599;
        </Link> */}
      </div>

      <div
        className="hero row fade-up"
        data-aos="zoom-out-up"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        <div className="left col-lg-6"></div>

        <div className="right col-lg-6">
          <div className="timer">
            <h4 className="fade-up">Time Left</h4>
            <h6 className="clock fade-up">
              <span className="digit">{formatTime(timeLeft.days)}</span>
              {"    "}days:{" "}
              <span className="digit">{formatTime(timeLeft.hours)}</span>
              {"    "}hrs:{" "}
              <span className="digit">{formatTime(timeLeft.minutes)}</span>
              {"    "}mins:{" "}
              <span className="digit">{formatTime(timeLeft.seconds)}</span>
              {"    "}secs
            </h6>
          </div>
          <div
            className="title fade-up"
            data-aos="zoom-out-up"
            data-aos-duration="1300"
            data-aos-once="true"
            style={{ paddingTop: "1rem" }}
          >
            <h1>GIRLATHON</h1>
            <h2>2024</h2>
          </div>
          <div className="desc">
            <h6 className="typing-animation">
              3 week long learning and hackathon organized by{" "}
              <span className="text-Gdsc">GDSC MACE {"  "}</span>
              {"  "}
            </h6>
            <br />

            <h3>
              <b>
                <span className="text-danger"> REGISTRATIONS CLOSED</span>
              </b>
            </h3>
          </div>
        </div>
        {
          //<iframe title='J' src='https://my.spline.design/readyplayermelookingaround-0c0f2a2232256d31c16ec20f9e01ab2c/' frameborder='0' width='100%' height='100%'></iframe>
        }
      </div>
      {/* <div className="reg-btn-cont row">
        <div className="col-6 oth"></div>
        <div style={{ position:'absolute',zIndex:'90',top:'10rem',right:'50%' }}>
          <Link to="/Signin" className="reg-btn" >
            Register &#x2197;
          </Link>
        </div>
      </div> */}
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
      >
        {/* <Link
          to="/Signin"
          className="reg-btn"
          onClick={() => {
            document.getElementById("hero-navmob").style.display = "block";
            document.getElementById("hero-amob").style.display = "none";
            document.getElementById("hero-nav").style.display = "block";
            document.getElementById("hero-nav").classList.remove("link-active");
            document.getElementById("hero-a").style.display = "none";
          }}
        >
          Register now &#x2197;
        </Link> */}
      </div>
    </section>
  );
}

export default Hero;
