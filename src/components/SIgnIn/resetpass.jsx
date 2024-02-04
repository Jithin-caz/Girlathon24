import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loggedOut } from '../../redux/action';
import "./signin.css";
import axios from 'axios';

export default function ResetPass(){

  const API = import.meta.env.VITE_API;
  
    const dispatch= useDispatch();
    const [oldPass,setOldPass]=useState('');
    const [newPass,setNewPass]=useState('');
    const [confPass,setConfPass]=useState('');

    const navigate=useNavigate()

    const changePass=async(e)=>{
        e.preventDefault()
      
        if(newPass!=confPass)
        {
            alert("password does not match")
            return
        }
        const data={
          prevpassword:oldPass,
          password:newPass
        }
       
        
       dispatch(loggedOut())
      navigate('/Signin')
    }
    return(
<section>
<div className="section login">
      <div className="form-container">
        <p className="title">reset password</p>
        <p style={{ color:'yellow' }}>NOTE: once the password is changed you'll have to login again</p>
        <form className="form" onSubmit={changePass}>
          <div className="input-group">
            <label htmlFor="email">old password</label>
            <input
              type="text"
              name="passwordold"
              id="passwordold"
              placeholder=""
              value={oldPass}
              required="required"
              onChange={(e)=>setOldPass(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">new password</label>
            <input
              type="password"
              name="passwordnew"
              id="passwordnew"
              placeholder=""
              required="required"
              value={newPass}
              onChange={(e)=>setNewPass(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">confirm new password</label>
            <input
              type="password"
              name="passwordconf"
              id="passwordconf"
              placeholder=""
              required="required"
              value={confPass}
              onChange={(e)=>setConfPass(e.target.value)}
            />
          </div>
          <button type="submit" className="sign">
           Submit
          </button>
        </form>
      </div>
    </div>
</section>
    );

}