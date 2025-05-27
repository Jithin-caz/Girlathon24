import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

// ===== Add this style string at the top =====
const style = `
.about::before {
  content: "Puzzle 1 : VGhlcmUgaXMgbm90aGluZyBpbXBvc3NpYmxlIHRvIGhpbSB3aG8gd2lsbCB0cnku (Seek him — not by face, but by phrase.)";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: monospace;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.08);
  white-space: pre-wrap;
  overflow: hidden;
  z-index: 0;
  user-select: none;
  pointer-events: none;
  background-repeat: repeat;
  background-position: 0 0;
  padding: 2rem;
  display: block;
}
`;

export default function About() {
  // ===== Add this useEffect inside the component =====
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <section
      className="about"
      id="ABOUT"
      style={{ position: "relative", zIndex: 20, background: "#2b2b2b", overflow: "hidden" }} // added overflow: hidden
    >
      <img
        style={{
          position: "absolute",
          height: "100%",
          opacity: ".4",
          width: "100%",
        }}
        src="images/backgroundAbstarct.png"
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100dvh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1 className="about-bg-text">about</h1>{" "}
      </div>
      <Container style={{ color: "white", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <Row className="fade-up" data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
          <Col lg={6}>
            <p>
              <span style={{ fontSize: "2rem" }}>
                <b>About DSC MACE</b>
                <br />
              </span>
              <br />
              Welcome to DSC MACE, the dynamic Developer Student Club chapter at Mar Athanasius College of Engineering.
              <span
                style={{
                  fontSize: "10px",
                  color: "rgba(255, 255, 255, 0.05)", // almost invisible white on dark background
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
                onClick={() => alert("Puzzle 5 : \n You've found the recurring number — now finish the calculation : \n The year of Star Trek's first episode, 1966.\n Add the mysterious number to it.\n What does it reveal?")}
              >
                ●
              </span>

              Established in 2020, we've rapidly evolved into a vibrant platform for student innovation. Our mission is to enhance potential abilities through hands-on workshops, coding competitions, and engaging tech talks.
              DSC MACE is more than a club; it's a gateway to the latest in technology, fostering a mindset of continuous learning. Join us as we shape the tech leaders of tomorrow, making an impact at Mar Athanasius College of Engineering. Innovation meets opportunity here!
            </p>
          </Col>{" "}
          <Col lg={6}>
            <img src="/images/mace.png" style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row
          className="fade-up"
          data-aos="zoom-out-up"
          data-aos-duration="1300"
          data-aos-once="true"
          style={{ paddingTop: "10dvw", rowGap: "3rem" }}
        >
          <Col lg={6} style={{ display: "flex", justifyContent: "center" }}>
            <img src="images/girlathonComSonn.jpeg" style={{ width: "70%" }} />
          </Col>{" "}
          <Col lg={6}>
            <p>
              <span style={{ fontSize: "2rem" }}>
                <b>About Girlathon</b>
              </span>
              <br />
              <br />
              Welcome to Girlathon 2025, an inclusive hackathon exclusively designed for women. Organized by the Developers Student Club (DSC)
              at Mar Athanasius College of Engineering (MACE), Girlathon aims to advance and excel women in technology by fostering innovation and problem-solving. Taking place from
              June 1st - July 26th, 2025, this beginner-friendly event provides proficient mentorship, guidance, and support to
              encourage and celebrate women's participation in STEM fields. Engage in hands-on projects that encourage innovation, address real-world challenges, and showcase the incredible
              potential of women in tech. Benefit from experienced mentors who are passionate about supporting and guiding women in their tech journeys. Join us in this empowering experience,
              celebrating women's achievements in technology.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
