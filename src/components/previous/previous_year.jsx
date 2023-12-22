import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import "./previous.css";

const images = ["girl.jpg", "mace.png", "hero.png"];

const Previous = () => {
  const chars = ["G", "I", "R", "L", "A", "T", "H", "O", "N"];
  var x = -1;
  const repeatedImages = Array.from({ length: 3 }, (_, index) => images).flat();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredIndex) {
        const nextIndex = (currentImageIndex + 1) % repeatedImages.length;
        setCurrentImageIndex(nextIndex);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentImageIndex, hoveredIndex]);

  const rightImage = (index) => {
    setHoveredIndex(index);
    setCurrentImageIndex(index);
    document.getElementById(`card${index}`).style.opacity = 0;

    // Reset opacity for other cards
    repeatedImages.forEach((_, i) => {
      if (i !== index) {
        document.getElementById(`card${i}`).style.opacity = 1;
      }
    });
  };

  return (
    <section className="previous_section">
      <Container style={{ height: "fit-content" }}>
        <Row style={{ rowGap: "8rem" }}>
          <Col
            md={6}
            style={{ textAlign: "center", gap: "2rem", color: "black" }}
          >
            <h2 style={{ fontSize: "4rem" }}>Girlathon @2022</h2>
            <p style={{ color: "black" }}>{/* Your text content here */}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="row"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  width: "100%",
                  gap: ".5rem",
                }}
              >
                {repeatedImages.map((imageName, index) => (
                  <div
                    key={index}
                    className="col-4 cards"
                    style={{ position: "relative", width: "30%" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "100%",
                        overflow: "hidden",
                        borderRadius: "8px",
                      }}
                    >
                      <img
                        src={`images/${imageName}`}
                        className="images"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        onClick={() => rightImage(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                    <div
                      className="cards-inner"
                      id={`card${index}`}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(255, 165, 0, 0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "8px",
                        opacity: hoveredIndex === index ? 0 : 1,
                      }}
                      onMouseEnter={() => rightImage(index)}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                        document.getElementById(
                          `card${index}`
                        ).style.opacity = 1;
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          fontSize: "4rem",
                          fontWeight: "bold",
                        }}
                      >
                        {chars[++x]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col
            md={6}
            className="image-right"
            style={{ marginTop: "2rem", overflow: "hidden" }}
          >
            <img
              src={`images/${repeatedImages[currentImageIndex]}`}
              style={{ width: "100%", height: "100%", zIndex: "-1" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Previous;
