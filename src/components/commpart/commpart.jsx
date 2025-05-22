import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./commpart.css";

export default function CommPart() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="SPONSERS" className="commSec py-5" data-aos="fade-up" data-aos-offset="150">
      <Container>
        <Row className="mb-4">
          <Col xs={12}>
            <h1
              className="text-center"
              data-aos="zoom-out"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              Our Sponsors
            </h1>
          </Col>
        </Row>

        {/* Sponsor: Kalkitech */}
        <Row className="justify-content-center text-center mb-4">
          <Col
            xs={12}
            sm={10}
            md={8}
            lg={6}
            xl={5}
            data-aos="zoom-in"
            data-aos-delay="400"
            className="d-flex justify-content-center"
          >
            <a
              href="https://kalkitech.com/"
              target="_blank"
              className="card1 highlighted-sponsor"
              rel="noreferrer"
            >
              <img
                src="/images/kalikitech.png"
                alt="Kalkitech Logo"
                className="sponsor-img responsive-img"
              />
            </a>
          </Col>
        </Row>

        {/* Sponsor Logos: Devfolio and ETHIndia */}
        <Row className="justify-content-center">
          <Col
            xs={10}
            sm={6}
            md={4}
            className="text-center d-flex justify-content-center mb-4 mb-md-0"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="https://devfolio.co/"
              className="card1 lighter-sponsor"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/devfolio-logo.png"
                alt="DEVFOLIO LOGO"
                className="sponsor-img responsive-img"
              />
            </a>
          </Col>
          <Col
            xs={10}
            sm={6}
            md={4}
            className="text-center d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <a
              href="https://ethindia2024.devfolio.co/"
              className="card1 lighter-sponsor"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/ethindia-logo.png"
                alt="ETHINDIA LOGO"
                className="sponsor-img responsive-img"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
