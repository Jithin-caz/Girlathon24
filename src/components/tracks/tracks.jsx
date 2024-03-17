import React, { useEffect } from "react";
import { Col, Container, Row,Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay,EffectCoverflow, Pagination,Navigation } from 'swiper/modules';

export default function Tracks() {
    const vals=[
      {
        header:'Healthcare',
        desc:'Innovate solutions to enhance patient care, improve accessibility, or streamline healthcare processes. Develop technologies that leverage data analytics, telemedicine, or wearable devices to address challenges in the healthcare industry.',
        numb:1,
        color:'#0057E7',
        img:'health.png'
      },
      {
       
        header:'Blockchain',
        desc:'Explore applications of blockchain technology beyond cryptocurrency. Develop decentralized solutions for secure and transparent transactions, supply chain management, healthcare records, or identity verification, contributing to the evolution of a more trustworthy digital landscape.',
        numb:2,
        color:'#D62D20',
        img:'block.png'
      },
      {
        header:'Waste Management',
        desc:'Address the global challenge of waste disposal and recycling. Explore innovative approaches to reduce, reuse, and recycle waste materials. Develop technologies that optimize waste collection, sorting, and processing for a cleaner and more sustainable environment.',
        numb:3,
        color:'#FFA700',
        img:'waste.png'
      },
      {
        header:'Open Innovation',
        desc:'Encourage collaboration and creativity across various domains. Develop tools, platforms, or methodologies that facilitate open innovation, allowing diverse teams to work together and solve complex problems through shared ideas and resources.',
        numb:11,
        color:'#D62D20',
        img:'op.png'
      },
      
      {
        header:'Social Stigma',
       desc:'Combat social stigma related to mental health, disabilities, or marginalized communities. Develop apps, platforms, or campaigns to raise awareness, promote inclusivity, and foster understanding, aiming to break down societal barriers and stereotypes.',
        numb:5,
        color:'#0057E7',
        img:'soc.png'
      },
      {
        header:'Communication',
        desc:'Enhance communication tools and platforms to foster better connectivity and collaboration. Develop solutions that improve real-time communication, language translation, or accessibility, breaking down communication barriers for a more interconnected world.',
        numb:6,
        color:'#D62D20',
        img:'comm.png'
      },
      {
        header:'Security',
        desc:'Address cybersecurity challenges by developing innovative solutions to protect systems, networks, and data. Explore advancements in encryption, threat detection, or user authentication to ensure a secure digital environment in the face of evolving cyber threats.',
        numb:7,
        color:'#FFA700',
        img:'sec.png'
      },
      {
        header:'Renewable Energy',
        desc:'Drive the transition to sustainable energy sources by developing solutions for renewable energy generation, storage, or distribution. Explore innovations in solar, wind, or other clean energy technologies to address the world\'s growing energy needs while reducing environmental impact.',
        numb:9,
        color:'#0057E7',
        img:'ren.png'
      },
      {
        header:'Enviornment & Agriculture',
        desc:'Create technologies to monitor and preserve the environment and agriculture. Develop solutions for precision farming, sustainable agriculture practices, or environmental monitoring to contribute to the conservation of natural resources and biodiversity.',
        numb:8,
        color:'#008744',
        img:'env.png'
      },
      
      {
        header:'Disaster Management',
        desc:'Develop technologies to improve disaster preparedness, response, and recovery. Create solutions for early warning systems, crisis communication, or efficient resource allocation during natural disasters or emergencies to minimize the impact on communities.',
        numb:10,
        
        color:'#0057E7',
        img:'dis.png'
      },
      {
        header:'Transportation',
       desc:'Tackle issues related to urban mobility, traffic congestion, and environmental impact. Develop solutions for efficient public transportation, smart traffic management, or sustainable transportation options to create a more connected and eco-friendly future.',
        numb:4,
        color:'#008744',
        img:'trans.png'
      },
     
    ]
  return (
    <section
      className="tracks"
      id="TRACKS"
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
        <h1  className="about-bg-text" style={{ color:'rgba(255, 255, 255, 0.05)' }}>tracks</h1>{" "}
      </div>
      <h1 className="tracks-sm">Tracks</h1>
      <Container 
        style={{ color: "white", paddingTop: "2rem", paddingBottom: "5rem" }}
      >
        <Row className="fade-up tracks-big" data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true"  >
         {vals.map((value)=><Col lg={4} md={6} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true"  style={{ display:'flex',justifyContent:'center'}}>
         <div className="card" >
         
  <div className="card-inner" style={{ background:'none' }}>
    <div className={`card-front track-front${value.numb}`} style={{ background:'none' }}>
     <div style={{ minWidth:'20.2rem',paddingRight:'1rem' }}> <h4 className="track-front-inner" style={{paddingTop:'2rem',paddingBottom:'2rem',padding:'1rem',borderRadius:'.4rem', color:'white',fontSize:'1.3rem',background:`${value.color}`,boxShadow:'0px 0px 7px 3px rgba(0, 0, 0, 0.152)',textAlign:'center',height:'12rem' }}>{value.header}
    <br></br><div style={{display:'flex',justifyContent:'center',paddingTop:'1rem' }}> <img src={`/images/${value.img}`} style={{height:'5rem' }}/></div></h4>
     </div>
    </div>
    <div className="card-back track-back"  >
    <Card className="tracks-card" >
            <Card.Header style={{ color:`${'white'}`,fontWeight:'bold' }}>{value.header}</Card.Header>
            <Card.Body style={{ overflowY:'scroll' }}>
                <div style={{ color:'white' }}><p style={{ fontSize:'.9rem' }}>{value.desc}</p>
              </div>
            </Card.Body>
        </Card>
    </div>
  </div>
</div>
         
         </Col>)}
        </Row>
        <Row className="tracks-small">
          <Col>
          <Swiper
       
       effect={'coverflow'}
       loop={true}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={'auto'}
       autoplay={{
         delay: 3000,
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
     {vals.map((value)=> <SwiperSlide key={value}>
     <div className="tracks-card-back" style={{background:`${value.color}` }}>
    <Card className="tracks-card" >
            <Card.Header style={{ color:`${'white'}`,fontWeight:'bold' }}>{value.header}</Card.Header>
            <Card.Body style={{ overflowY:'scroll' }}>
                <div style={{ color:'white' }}><p style={{ fontSize:'1rem' }}>{value.desc}</p>
              </div>
            </Card.Body>
        </Card>
    </div>
       </SwiperSlide>)}
       
     </Swiper>

          </Col>
        </Row>
      </Container>
    </section>
  );
}



