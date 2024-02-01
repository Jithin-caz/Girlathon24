import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function About() {
  return (
    <section
      className="about"
      id="ABOUT"
      style={{ position: "relative", zIndex: "20", background: "#2b2b2b" }}
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
      <Container
        style={{ color: "white", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <Row className="fade-up">
          <Col lg={6}>
            <p>
              <span style={{ fontSize: "2rem" }}>
                <b>About GDSC MACE</b>
                <br></br>
              </span>
              <br></br>Welcome to GDSC MACE, the dynamic Google Developer Student Club chapter at Mar Athanasius College of Engineering. Established in 2020, we've rapidly evolved into a vibrant platform for student innovation. Our mission is to enhance potential abilities through hands-on workshops, coding competitions, and engaging tech talks. GDSC MACE is more than a club; it's a gateway to the latest in technology, fostering a mindset of continuous learning. Join us as we shape the tech leaders of tomorrow, making an impact at Mar Athanasius College of Engineering. Innovation meets opportunity here!
            </p>
          </Col>{" "}
          <Col lg={6}>
            <img src="/images/mace.png" style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row
          className="fade-up"
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
              <br></br>
              <br></br>Girlathon is a beginner friendly hackathon exclusively
              for those who identify as woman. The flagship event of Google
              Developers Student Club MACE is driven by the vision to advance
              and excel women in the field of technology. The multiple round
              hackathon is aimed to be one among plenty of initiatives
              undertaken around the globe for propagating and endorsing women
              participation in STEM field,by encouraging to incorporate
              innovation with technology in their domain of interest with
              proficient mentorship, guidance and support.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
