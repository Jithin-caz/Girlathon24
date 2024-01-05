import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Carousel } from "react-bootstrap";
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

    repeatedImages.forEach((_, i) => {
      if (i !== index) {
        document.getElementById(`card${i}`).style.opacity = 1;
      }
    });
  };

  return (
    <section className="previous_section" >
    <img style={{ position:'absolute',height:'100%',opacity:'.6',width:'100%' }} 
       src="images/backgroundAbstarct.png"
    />
      <Container style={{ height: "fit-content",padding:'3rem' }}>
        <Row style={{ rowGap: "8rem" }}>
          <Col
            md={6}
            style={{ textAlign: "center", gap: "2rem", color: "white" }}
          >
            <h2 className="fade-up" style={{ fontSize: "4rem" }}>Girlathon @2022</h2>
            <p className="fade-up" style={{ color: "white",textAlign:'left' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              minus amet officia consequatur deserunt suscipit nesciunt, nostrum
              voluptatibus optio laudantium saepe, placeat tempora velit
              assumenda id tenetur sequi ad alias. Reprehenderit repellat sit
              ipsa corporis tempora. Delectus vero labore alias quis voluptatum
              exercitationem debitis nam totam placeat quo nulla corporis
              veritatis incidunt a hic, fugiat nobis quaerat quidem! Voluptatum
              libero eligendi aut, tempora dolorum quae optio nostrum maxime
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="row fade-up"
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
                        backgroundColor: "rgba(19, 15, 52, 0.7)",
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
                      <span className="square-letters"
                        style={{
                          color: "white",
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
            className="image-right fade-up"
            style={{ marginTop: "2rem", overflow: "hidden" }}
          >
            <Carousel interval={hoveredIndex!=null?10000:1000}>
              {repeatedImages.map((imageName, index) => (
                <Carousel.Item key={index} style={{ height: "100%",width:'100%' }}>
                  <img
                    className="d-block w-100 h-100"
                    src={hoveredIndex==null? `images/${imageName}`:`images/${repeatedImages[currentImageIndex]}`}
                    alt={`Slide ${index + 1}`}
                    style={{ height: "100%" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Previous;
