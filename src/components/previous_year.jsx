// CircleContainer.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Previous = () => {
  return (
    <section style={{ position:'relative',marginTop:'10rem',minHeight:'50rem',overflowY:'hidden' }}>
    <div className="container-fluid full-height" style={{ marginTop:'5rem',position:'absolute' }}>
      <div className="circle_box row full-height">
        <div className="col-2 circle"></div>
        <div className="col-2 circle"></div>
        <div className="col-2 circle"></div>
        <div className="col-2 circle"></div>
        <div className="col-2 circle"></div>
        <div className="col-2 circle"></div>
      </div>
    </div>
    <div style={{ position:'relative',marginTop:'5rem' }}>
    <div style={{ position:'absolute' }} className='blur-layer'></div>
    <h1 className='previous-head'>Last year</h1>
    <img src='/images/mace.png' style={{ width:'50%' }}/>
    </div>
  </section>
  );
};

export default Previous;
