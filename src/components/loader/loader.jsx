import React from 'react'
import './loader.css'
export default function Loader()
{
    return(
        <section className='loading-section' >
		<div class="spinner">
  <div class="outer">
    <div class="inner tl"></div>
    <div class="inner tr"></div>
    <div class="inner br"></div>
    <div class="inner bl"></div>
  </div>
</div>
	</section>
    );
}