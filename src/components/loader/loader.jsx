import React from 'react'
import './loader.css'
export default function Loader()
{
    return(
        <section className='loading-section' >
		<div className="spinner">
  <div className="outer">
    <div className="inner tl"></div>
    <div className="inner tr"></div>
    <div className="inner br"></div>
    <div className="inner bl"></div>
  </div>
</div>
	</section>
    );
}