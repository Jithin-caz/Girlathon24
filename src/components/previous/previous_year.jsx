import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import "./previous.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay,EffectCoverflow, Pagination,Navigation } from 'swiper/modules';


const Previous = () => {
  const chars = ["G", "I", "R", "L", "A", "T", "H", "O", "N",'@','2','3'];
  var x = -1;
  const repeatedImages =[1,2,3,4,5,6,7,8,9,10,11,12];
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
    <section className="previous_section">
      <img
        style={{
          position: "absolute",
          height: "100%",
          opacity: "1",
          width: "100%",
        }}
        src="images/prevBack.png"
      />
      <Container style={{ height: "fit-content",paddingTop:'3rem',paddingBottom:'3rem' }}>
        <Row style={{ rowGap: "8rem",paddingBottom:'2rem',position:'relative' }}>
          <Col
            lg={12}
            style={{ textAlign: "center", gap: "2rem", color: "white" }}
          >
            <h2 id="heading-prev" className="fade-up" style={{ fontSize: "4rem",textAlign:'left' }}
            data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
              Girlathon @2023
            </h2>
           
            <p
              className="fade-up" id="big_txt" data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true"
              style={{ color: "white", textAlign: "left" }}
            >
            Dive into the transformative world of Girlathon '23, the celebrated annual GDSC hackathon at Mar Athanasius College.
             This empowering event serves as a dedicated platform, spotlighting and honoring the accomplishments of women in technology.
              Beyond merely showcasing coding proficiency, Girlathon '23 is a canvas for boundless creativity and the birthplace of innovative
               solutions. Attendees immersed themselves in an environment enriched with inspiring speakers, mentor-guided challenges, and 
               a collaborative spirit, fostering not just technical acumen but also critical networking opportunities. The holistic approach
                taken extends beyond coding, incorporating wellness sessions that emphasize the importance of balance in the fast-paced tech
                 landscape. Reflecting on the profound impact of this edition, it is evident that Girlathon '23 has played a pivotal role in
                  shaping a more inclusive tech industry. As we celebrate the numerous successes and achievements of this empowering initiative,
                   we look forward to a continued commitment to the advancement and empowerment of women in technology at Mar Athanasius College.
            </p>
            <p  className="fade-up" id="mob_txt" data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true"
             style={{ color: "white", textAlign: "left" }}>Discover Girlathon '23, the annual GDSC hackathon at Mar Athanasius College—an empowering platform spotlighting women in technology.
              This transformative event fosters creativity, innovation, and technical prowess through inspiring speakers, mentor-guided challenges, and a collaborative atmosphere. Beyond coding,
               holistic elements, including wellness sessions, prioritize balance in the tech landscape. Girlathon '23 significantly contributes to shaping inclusivity in the industry, celebrating
                successes, and committing to advancing women in technology at Mar Athanasius College.</p>
            </Col></Row>
            <Row className="tiles" style={{ rowGap: "3rem",paddingBottom:'2rem' }}>
            <Col >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="row fade-up" data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true"
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
                        src={`images/prev/p${imageName}.jpg`}
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
                        onMouseEnter={() => {setHoveredIndex(index)
                       
                        }}
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
                      onMouseEnter={() => {rightImage(index)
                     }}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                        document.getElementById(
                          `card${index}`
                        ).style.opacity = 1;
                      }}
                    >
                      <span
                        className="square-letters"
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
            lg={6} 
            className="image-right fade-up" data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true"
            style={{ marginTop: "0rem", overflow: "hidden" }}
          >
            <Carousel interval={hoveredIndex != null ? 100000 : 1500} controls={false} indicators={false}>
              {repeatedImages.map((imageName, index) => (
                <Carousel.Item
                  key={index}
                  style={{ height: "100%", width: "100%" }}
                >
                  <img
                    className="d-block w-100 h-100" 
                    src={
                      hoveredIndex == null
                        ? `images/prev/p${imageName}.jpg`
                        : `images/prev/p${currentImageIndex+1}.jpg`
                    }
                    alt={`Slide ${index + 1}`}
                    style={{ height: "100%" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="mob_car" >
        
        <Col >
      <Swiper
       
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows:true,
          shadowOffset: 20,
    shadowScale: 50,
        }}
        pagination={true}
        navigation={true}
        modules={[Autoplay,EffectCoverflow, Pagination,Navigation]}
        className="mySwiper"
      >
      {repeatedImages.map((imgInd)=> <SwiperSlide key={imgInd}>
          <img  src={`images/prev/p${imgInd}.jpg`} style={{ borderRadius:'.7rem' }}/>
        </SwiperSlide>)}
        
      </Swiper>
      </Col>
      
        </Row>
      </Container>
    </section>
  );
};

export default Previous;
