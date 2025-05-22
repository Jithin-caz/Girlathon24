import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./commpart.css";

export default function CommPart() {
  return (
    <section id="SPONSERS" className="commSec py-5">
      <Container>
        <Row className="mb-4">
          <Col xs={12}>
            <h1 className="text-center">Our Sponsors</h1>
          </Col>
        </Row>

{/* Sponsor: Kalkitech */}
{/* Sponsor: Kalkitech */}
<Row className="justify-content-center text-center mb-4">
  <Col xs={12} sm={10} md={8} lg={6} xl={5}>
    <a
      href="https://kalkitech.com/"
      target="_blank"
      className="card1 highlighted-sponsor mx-auto"
      rel="noreferrer"
    >
      <img
        src="/images/kalikitech.png"
        alt="Kalkitech Logo"
        className="sponsor-img"
      />
    </a>
  </Col>
</Row>

{/* Sponsor Logos: Devfolio and ETHIndia */}
<Row className=" justify-content-center">
  <Col xs={10} sm={6} md={4} className="text-center">
    <a
      href="https://devfolio.co/"
      className="card1 lighter-sponsor"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="/images/devfolio-logo.png"
        alt="DEVFOLIO LOGO"
        className="sponsor-img"
      />
    </a>
  </Col>
  <Col xs={10} sm={6} md={4} className="text-center">
    <a
      href="https://ethindia2024.devfolio.co/"
      className="card1 lighter-sponsor"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="/images/ethindia-logo.png"
        alt="ETHINDIA LOGO"
        className="sponsor-img"
      />
    </a>
  </Col>
</Row>

      </Container>
    </section>
  );
}
