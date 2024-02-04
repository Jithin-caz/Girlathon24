import React, { useEffect, useState } from 'react'
import './dash.css'
import { Card } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loggedOut } from '../../redux/action';
import Loader from '../loader/loader';


export default function DashInd()
{
  const API = import.meta.env.VITE_API;

  const [teammates,setteammates]=useState([])
  const [lead,setLead]=useState('')

  const [count,setCount]=useState(0)
    const [team,setTeam]=useState(true)
    const [mate,setMate]=useState(false)
    const [teamname,setTeamname]=useState('')
    const [teammatename,setTeammatename]=useState('')
    const [teammateemail,setTeammateemail]=useState('')
    const [teammatenum,setTeammatenum]=useState('')
    const [dashDone,setDashDone]=useState(false)

    const [datafetched,setDataFetched]=useState(false)
   
    
    const loginSuccess=useSelector((state)=>state.logIn)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const logOut=async()=>{
      const res=await axios.get(`${API}/auth/logout`,{withCredentials:true})
    }
  
    const getter=async()=>
    {
   const res=await axios.get(`${API}/auth/profile`,{withCredentials:true})
   if(res!=null)
      setDataFetched(true)
    setLead(res.data.lead)
    setteammates(res.data.members)
    
    if(res.data.lead.idea)
    {
     const idea=document.getElementById('idea-status')
     idea.innerHTML="idea submission complete"
     idea.style.color='white'
    }
    if(res.data.lead.team!=null)
      {
        setTeam(false)
        setMate(true)
        setTeamname(res.data.lead.team)
        if(teammates.length==3)
          setDashDone(true)
      }
    }
    useEffect(()=>{
      getter()
      if(!loginSuccess.isLoggedIn)
        navigate('/Signin')
     if(teammates.length==3)
        setCount(5)
     
    })
    const setTeammate=async(event)=>
    {
      document.getElementById('email-exist').style.display='none'
      event.preventDefault();
      const data={
        name:teammatename,
        email:teammateemail,
        phone:teammatenum,
        team:teamname
      }
      const res = await axios.post(`${API}/team/member-register`,data,{withCredentials:true})
      
   
     if(teammates.length==3)
        setCount(5)

        else if(res.status==230)
        document.getElementById('email-exist').style.display='block'
      else
        alert("team mate registered")
    }

    async function checkTeamName(event)
    {
      event.preventDefault();
      const data={
        team:teamname
      }
      const res = await axios.post(`${API}/team/team-assign`,data,{withCredentials:true})
      
      if(res.status==200)
      {
        setTeam(false)
         setMate(true)
      }
      else{
        document.getElementById('team-exist').style.display='block'
      }
   
    }
    return(datafetched? <section style={{ paddingTop:'1rem' }}>
    <h1 style={{ paddingTop:'5rem',paddingLeft:'3rem',color:'rgb(103, 225, 255)' }} className='fade-up dash-heading'
    data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">Welcome {lead.name}</h1>
    <h3 style={{paddingLeft:'3rem',color:' rgb(103, 225, 255)' }} className='fade-up dash-heading'
    data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">{teamname==''?'team not  registered':teamname}</h3>
    {dashDone&&<p  style={{paddingLeft:'3rem',color:'rgb(103, 225, 255)' }}>team full</p>}
    <p id='idea-status' style={{ paddingTop:'.5rem',paddingLeft:'3rem',color:'orange' }}
     data-aos-duration="1300" data-aos-once="true">idea not sumbitted</p>
    <div className='dashContainer'  data-aos-duration="1300" data-aos-once="true">
    {!dashDone &&(
      <div className='dash-left' >
    {team &&(
        <>
        <h3>Guidelines</h3>
        <ol>
        <li style={{ paddingTop:'.5rem' }}>1.You can register as a team of 4 members maximum.</li>
    <li  style={{ paddingTop:'.5rem' }}>2.Team lead has to register first</li>
    <li  style={{ paddingTop:'.5rem' }}>3.After registration, team lead can add the members by the option of 'Add Member'.</li>
    <li  style={{ paddingTop:'.5rem' }}>4.Only team lead can enter the details of team members.</li>
    <li  style={{ paddingTop:'.5rem' }}>5.Ideas based on various domains of interest can be submitted as Abstract.</li>
    <li  style={{ paddingTop:'.5rem' }}>6.Once the abstract of your idea is submitted and all team members are added , the registration is complete.</li>
        </ol>
       <hr></hr>
       <br></br>
        <form onSubmit={checkTeamName}>
    <div style={{ maxWidth:'18rem',minWidth:'13rem' }}>
    <div class="input-container fade-up">
  <input value={teamname} name='teamname' placeholder="Team name" class="input-field" type="text"  required="required"
    onChange={(e)=>setTeamname(e.target.value)}
  />
  <label for="input-field" class="input-label">Give a cool name for your team</label>
  <span class="input-highlight"></span>
</div> </div>
  <div className='fade-up' 
  data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true" style={{ width:'100%',display:'flex',justifyContent:'right',padding:'3rem' }}>
      <button className='save' type='submit'>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg class="icon" height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z">
        </path>
        </svg>
    </div>
  </div>
  <span>save</span>
</button>

      </div>
      <p id='team-exist' style={{ color:'yellow',display:'none' }}>this team already exists!!</p>
    </form>
    </>
    ) 
    }
    {
        mate&&(
            <form onSubmit={setTeammate} style={{ width:'45dvw',minwidth:'20rem' }}>
            <h3>Add member</h3>
            <div className='row' style={{gap:'2rem' }}>
<div className='team-mate col fade-up' 
data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
    <h5>Team mate details </h5>
    <div class="inputbox">
    <input value={teammatename} name='teammateName' required="required" type="text"
      onChange={(e)=>setTeammatename(e.target.value)}
    />
    <span> name</span>
    <i></i>
</div>
 <div class="inputbox">
    <input value={teammateemail} name='teammateEmail' required="required" type="email"
      onChange={(e)=>setTeammateemail(e.target.value)}
    />
    <span>e mail</span>
    <i></i>
</div>
<div class="inputbox">
    <input value={teammatenum} name='teammatephone' required="required" type="text"
      onChange={(e)=>setTeammatenum(e.target.value)}
    />
    <span>Ph number</span>
    <i></i>
</div>
</div>
      </div> 
      <div>
        
      </div>
     <div className='fade-up'
     data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true"
      style={{ width:'100%',display:'flex',justifyContent:'right',padding:'3rem' }}>
      <button className='save' type='submit' >
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg class="icon" height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z">
        </path>
        </svg>
    </div>
  </div>
  <span>next</span>
</button>
      </div>
      <p id='email-exist' style={{ color:'yellow',display:'none' }}>this email already exists!!</p>
    </form>
    
        )
    }
    </div>
    )}
    
   {mate&&<div className='dash-right fade-up'
   data-aos="zoom-out-up" data-aos-duration="1300" data-aos-once="true">
    <div >
    <div className='row' style={{ rowGap:'2rem',display:'flex',justifyContent:'center',alignItems:'center',width:'100%' }}>
    {teammates.length<3 ?(
      <div class="card">
  <div class="card-inner">
    <div class="card-front">
     <div> <h3 ><b style={{ color:'#23242a',fontSize:'2rem' }}>Team details</b></h3>
     </div>
    </div>
    <div class="card-back">
    <Card style={{ minWidth:'19.1rem',background:'#2b2b2b',color:'white' }}>
            <Card.Header>{teamname}</Card.Header>
            <Card.Body>
                <div style={{ color:'white' }}><h6>team members</h6>
                <ul style={{ color:'white' }}>
              <li style={{ color:'white' }}>{lead.name} <span style={{ color:'white',fontSize:'.8rem' }}>(lead)</span></li>
              {teammates.map((member,index)=> <li key={index} style={{ color:'white' }}>{member.name}</li>)}
                </ul></div>
            </Card.Body>
        </Card>
    </div>
  </div>
</div>
    ):<>
    
     {teammates.map((member,index)=>  <div class="card">
  <div class="card-inner">
    <div class="card-front">
     <div> <h3 ><b style={{ color:'#23242a',fontSize:'2rem' }}>{member.name}</b></h3>
     </div>
    </div>
    <div class="card-back">
    <Card style={{ minWidth:'20.5rem',background:'#2b2b2b',color:'white' }}>
            <Card.Header>{member.name}</Card.Header>
            <Card.Body>
                <ul style={{ color:'white' }}>
              <li style={{ color:'white',paddingTop:'.9rem' }}><b>email:</b> {member.email}</li>
              <li style={{ color:'white',paddingTop:'.9rem' }}><b>phone:<br></br></b> {member.phone}</li>
                </ul>
            </Card.Body>
        </Card>
    </div>
  </div>
</div>)} 
 <div class="card">
  <div class="card-inner">
    <div class="card-front">
     <div> <h3 style={{ color:'#23242a' }}><b style={{ color:'#23242a',fontSize:'2rem' }}>{lead.name}</b>(lead)</h3>
     </div>
    </div>
    <div class="card-back">
    <Card style={{ minWidth:'20.5rem',background:'#2b2b2b',color:'white' }}>
            <Card.Header>{lead.name}</Card.Header>
            <Card.Body>
                <ul style={{ color:'white' }}>
              <li style={{ color:'white',paddingTop:'.9rem' }}><b>email:</b>{lead.email} </li>
              <li style={{ color:'white',paddingTop:'.9rem' }}><b>phone:</b>{lead.phone} </li>
                </ul>
            </Card.Body>
        </Card>
    </div>
  </div>
</div>
    </>  }
   
</div>
    </div>
   
    </div>}
   {mate&&(<div className='idea-submission fade-up'
   >
    <NavLink to='/ideaSumbit' >
    <button class="continue-application">
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
   idea sumbission
</button>
    
</NavLink>
<div style={{ paddingTop:'1rem' }}>

<br></br>
<button style={{ background:'none',border:'none' }} onClick={()=>{
  logOut();
   dispatch(loggedOut())
}}>logout</button>
</div>
</div>)} 

    </div>
    
    </section> :<Loader/>);
}