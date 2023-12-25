import React from 'react'
import './dash.css'
import { Card } from 'react-bootstrap';
export default function Dash()
{
    return(<section >
    <h1 style={{ paddingTop:'5rem',paddingLeft:'3rem',color:'#45f3ff' }} className='fade-up'>Dash Board</h1>
    <div className='dashContainer'>
    <div className='dash-left' >
    <form >
    <div style={{ maxWidth:'18rem' }}>
    <div class="input-container fade-up">
  <input name='teamname' placeholder="Team name" class="input-field" type="text"/>
  <label for="input-field" class="input-label">Give a cool name for your team</label>
  <span class="input-highlight"></span>
</div> </div>
<div className='row' style={{gap:'2rem' }}>
<div className='team-mate col fade-up'>
    <h5>Team mate 1</h5>
    <div class="inputbox">
    <input  name='teammate1Name' required="required" type="text"/>
    <span> name</span>
    <i></i>
</div>
 <div class="inputbox">
    <input name='teammate1Email' required="required" type="text"/>
    <span>e mail</span>
    <i></i>
</div>
</div>

<div className='team-mate  col fade-up'>
    <h5>Team mate 2</h5>
    <div class="inputbox">
    <input name='teammate2Name' required="required" type="text"/>
    <span> name</span>
    <i></i>
</div>
 <div class="inputbox">
    <input name='teammate2Email' required="required" type="text"/>
    <span>e mail</span>
    <i></i>
</div>
</div>

<div className='team-mate  col fade-up'>
    <h5>Team mate 3</h5>
    <div class="inputbox">
    <input name='teammate3Name' required="required" type="text"/>
    <span> name</span>
    <i></i>
</div>
 <div class="inputbox">
    <input name='teammate3Email' required="required" type="text"/>
    <span>e mail</span>
    <i></i>
</div>
</div>

<div className='team-mate  col fade-up'>
    <h5>Team mate 4</h5>
    <div class="inputbox">
    <input name='teammate4Name' required="required" type="text"/>
    <span> name</span>
    <i></i>
</div>
 <div class="inputbox">
    <input name='teammate4Email' required="required" type="text"/>
    <span>e mail</span>
    <i></i>
</div>
</div>
      </div> 
      <div className='fade-up' style={{ width:'100%',display:'flex',justifyContent:'right',padding:'3rem' }}>
      <button className='save' type='submit'>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg class="icon" height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z">
        </path>
        </svg>
    </div>
  </div>
  <span>Save</span>
</button>
      </div>
    </form>
    </div>
    <div className='dash-right fade-up'>
    <div class="card">
  <div class="card-inner">
    <div class="card-front">
      <h3 style={{ color:'#23242a',fontSize:'2rem' }}> Team details</h3>
    </div>
    <div class="card-back">
    <Card style={{ minWidth:'18.5rem',background:'#2b2b2b',color:'white' }}>
            <Card.Header>Team Name</Card.Header>
            <Card.Body>
                <div style={{ color:'white' }}><h6>team members</h6>
                <ul style={{ color:'white' }}>
              <li style={{ color:'white' }}>guy 1 <span style={{ color:'white',fontSize:'.8rem' }}>(lead)</span></li>
              <li style={{ color:'white' }}>guy 2</li>
              <li style={{ color:'white' }}>guy 3</li>
              <li style={{ color:'white' }}>guy 4</li>
                </ul></div>
            </Card.Body>
        </Card>
    </div>
  </div>
</div>
    </div>
    <div className='idea-submission fade-up'>
<a class="continue-application">
    <div>
        <div class="pencil"></div>
        <div class="folder">
            <div class="top">
                <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
            </div>
            <div class="paper"></div>
        </div>
    </div>
   idea submission
</a>
</div>
    </div>
    </section>);
}