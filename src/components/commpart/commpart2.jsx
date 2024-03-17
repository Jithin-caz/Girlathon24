import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './commpart.css'

export default function CommPart2(){
    return(<section className='commSec2' style={{ position: "relative", overflow: "hidden",display:'flex',justifyContent:'center' }}>
         <img
        style={{
          position: "absolute",
          height: "100%",
          opacity: ".6",
          width: "100%",
          zIndex: "2",
        }}
        src="images/backgroundAbstarct.png"
      />
      <div style={{ zIndex:'4',position:'absolute',width:'100%' }}>
      <Container  style={{ padding:'1rem' }}>
      
        <Row style={{paddingTop:'2rem',paddingLeft:'2rem',rowGap:'2rem'}}>
        <Col sm={12}><h1 style={{textAlign:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">Community Partners</h1></Col>
          <Col lg={4}  style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
          <a href='https://gdg.community.dev/gdg-cochin/' target='_blank' className="card1">
          <img src='/images/GDG Cochin-Centre.png' style={{ width:'100%' }}/>
  <div className="card__content">
 
  </div>
</a>

          </Col>
          <Col  lg={4}  style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
          <div className="card1">
          <img src='/images/wtm.png' style={{ width:'150%' }}/>
  <div className="card__content">
 
  </div>
</div>
          </Col>
          <Col  lg={4}  style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
          <a  href='https://gdg.community.dev/gdg-cloud-kochi/' target='_blank' className="card1">
          <img src='/images/gdg_cloud.png' style={{ width:'120%' }}/>
  <div className="card__content">
 
  </div>
</a>
          </Col>
        </Row>
      </Container>
      </div>
    </section>)
}