import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container,Col,Row } from 'react-bootstrap';
import './previous.css'
const images = ['girl.jpg', 'mace.png', 'hero.png'];

const Previous = () => {
  const chars=['G','I','R','L','A','T','H','O','N'];var x=-1;
  const repeatedImages = Array.from({ length: 3 }, (_, index) => images).flat();
  return (
    <section style={{ background:'#F3E4FA',marginTop:'3rem',padding:'3rem'}}>
    <Container style={{ height:'fit-content' }}>
      <Row style={{ rowGap:'8rem' }}>
<Col md={6} style={{ textAlign:'center',gap:'2rem',color:'black' }}>
<h2 style={{ fontSize:'4rem' }}>Girlathon @2022</h2>
      <p style={{ color:'black' }}>LAst year's girlathon fbdsjfdf dfhd ff dxnffxdfxf mnfnxd fdxf nfx fdxfdxf dxfnxj fmnxdfjdxfxdf xdnmf xdnf xmndf mnxd fmndxf mnzdf mndzf mnxd fmnxd fmnxd fmndxn fmnxd fmnd fmnxdfjzdf 
      bzxdfbjxd dxnf ndxfn dfn dfnxdb nxd fndx fnbxd fndx fnbdf nd fndx fndx fmndxfzdfnbbdbfdm
      </p>
      <div style={{ display:'flex',justifyContent:'center',alignItems:'center' }}>
      <div className='row' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',width:'100%',gap:'.5rem' }}>
      {repeatedImages.map((imageName, index) => (
        <div key={index} className='col-4 cards' style={{ position: 'relative', width: '30%'}}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: '100%', // Maintain a square aspect ratio
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img
              src={`images/${imageName}`}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              alt={`Image ${index + 1}`}
            />
          </div>
          <div className='cards-inner'
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 165, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
            }}
          >
            <span style={{ color: 'white', fontSize: '4rem', fontWeight: 'bold' }}>{chars[++x]}</span>
          </div>
        </div>
      ))}
    </div></div>
</Col>
<Col md={6} style={{ marginTop:'2rem',overflow:'hidden' }}>
 <img src='images/girl.jpg'style={{ width:'100%',height:'100%' }}/>  
</Col>
      </Row>
    </Container>
  </section>
  );
};

export default Previous;
