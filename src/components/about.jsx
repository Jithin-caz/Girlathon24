import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {ParallaxProvider,Parallax} from 'react-scroll-parallax'
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
        <h1  className="about-bg-text" >about</h1>{" "}
      </div>
      <Container
        style={{ color: "white", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <Row className="fade-up" data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true" >
          <Col lg={6}>
            <p>
              <span style={{ fontSize: "2rem" }}>
                <b>About GDSC MACE</b>
                <br></br>
              </span>
              <br></br>Welcome to GDSC MACE, the dynamic Google Developer Student Club chapter at Mar Athanasius College of Engineering. Established in 2020, we've rapidly evolved into a vibrant platform for student innovation. Our mission is to enhance potential abilities through hands-on workshops, coding competitions, and engaging tech talks.
               GDSC MACE is more than a club; it's a gateway to the latest in technology, fostering a mindset of continuous learning. Join us as we shape the tech leaders of tomorrow, making an impact at Mar Athanasius College of Engineering. Innovation meets opportunity here!
            </p>
          </Col>{" "}
          <Col lg={6}>
            <img src="/images/mace.png" style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row
          className="fade-up" data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true"
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
              <br></br>Welcome to Girlathon 2024, an inclusive hackathon exclusively designed for those who identify as women. Organized by the Google Developers Student Club (GDSC)
               at Mar Athanasius College of Engineering (MACE), Girlathon aims to advance and excel women in technology by fostering innovation and problem-solving. Taking place from 
               March 3 to March 24, 2024, at Kerala Startup Mission, Kalamassery, Kochi, India, this beginner-friendly event provides proficient mentorship, guidance, and support to 
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
