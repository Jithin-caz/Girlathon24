import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./commpart.css";

export default function PreviousSponsors() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <section
      className="commSec2"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "4rem",
      }}
      data-aos="fade-up"           // Animation when section comes into view
      data-aos-offset="100"        // Trigger animation 100px before element enters viewport
    >
      {/* Background image only */}
      <img
        style={{
          position: "absolute",
          height: "100%",
          opacity: ".6",
          width: "100%",
          zIndex: "1",
          top: 0,
          left: 0,
          objectFit: "cover",
        }}
        src="images/backgroundAbstarct.png"
        alt="Background"
      />

      {/* Foreground content */}
      <div style={{ zIndex: "2", width: "100%" }}>
        <Container style={{ padding: "1rem" }}>
          {/* Heading */}
          <Row className="pt-5">
             <Col sm={12} className="mb-4">
    <h1
      style={{ textAlign: "center" }}
      data-aos="zoom-out-up"
      data-aos-duration="1300"
      data-aos-once="true"
    >
      Previous Sponsors
    </h1>
  </Col>
          </Row>

          {/* Top 3 sponsors */}
          <Row className="pt-3 justify-content-center">
            <Col lg={12} className="d-flex justify-content-center">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "2rem",
                  maxWidth: "900px",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {[{
                  href: "https://gdg.community.dev/gdg-cochin/",
                  src: "/images/GDG Cochin-Centre.png",
                  alt: "GDG Cochin",
                  isLink: true
                }, {
                  src: "/images/wtm.png",
                  alt: "WTM",
                  isLink: false
                }, {
                  href: "https://gdg.community.dev/gdg-cloud-kochi/",
                  src: "/images/gdg_cloud.png",
                  alt: "GDG Cloud Kochi",
                  isLink: true
                }].map((sponsor, idx) => {
                  const content = (
                    <img
                      src={sponsor.src}
                      alt={sponsor.alt}
                      className="sponsor-img"
                      style={{ width: "100%", height: "auto", maxWidth: "280px" }}
                    />
                  );
                  return (
                    <div
                      key={idx}
                      style={{
                        flex: "1 1 280px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "180px",
                      }}
                      className="card1"
                      data-aos="zoom-in"
                      data-aos-delay={idx * 100}   // stagger animation for each sponsor
                    >
                      {sponsor.isLink ? (
                        <a
                          href={sponsor.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ width: "100%", display: "flex", justifyContent: "center" }}
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>

          {/* Bottom 2 sponsors */}
          <Row className="pt-4">
            <Col lg={12} className="d-flex justify-content-center">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "2rem",
                  maxWidth: "900px",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {[{
                  href: "https://www.mediaoneonline.com/",
                  src: "/images/media_one.png",
                  alt: "Media One"
                }, {
                  href: "https://pindown.app/",
                  src: "/images/pindown.png",
                  alt: "Pindown"
                }].map((sponsor, idx) => (
                  <a
                    key={idx}
                    href={sponsor.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card1"
                    style={{
                      flex: "1 1 280px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: "180px",
                    }}
                    data-aos="zoom-in"
                    data-aos-delay={idx * 150}   // staggered animation
                  >
                    <img
                      src={sponsor.src}
                      alt={sponsor.alt}
                      className="sponsor-img"
                      style={{ width: "100%", height: "auto", maxWidth: "280px" }}
                    />
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
