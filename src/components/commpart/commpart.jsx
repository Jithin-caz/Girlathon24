import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './commpart.css'

export default function CommPart(){
    return(<section className='commSec' style={{ position: "relative", overflow: "hidden",display:'flex',justifyContent:'center' }}>
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
      <div style={{ zIndex:'4',position:'absolute' }}>
      <Container  style={{ padding:'1rem'}}>
        <Row style={{paddingTop:'2rem',paddingLeft:'2rem',rowGap:'2rem'}}>
        <Col sm={12}><h1 style={{textAlign:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">Community Partners</h1></Col>
          <Col lg={6}  style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
          <div class="card1">
          <img src='/images/GDG Cochin-Centre.png' style={{ width:'100%' }}/>
  <div class="card__content">
 
  </div>
</div>

          </Col>
          <Col  lg={6}  style={{ display:'flex',justifyContent:'center',alignItems:'center' }} data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
          <div class="card1">
          <img src='/images/wtm.png' style={{ width:'150%' }}/>
  <div class="card__content">
 
  </div>
</div>
          </Col>
        </Row>
      </Container>
      </div>
    </section>)
}