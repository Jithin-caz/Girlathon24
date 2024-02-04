import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./IdeaSubmission.css";
import { loggedOut } from "../../redux/action";
import Loader from "../loader/loader";

export default function IdeaSubmission() {
  const API = import.meta.env.VITE_API;
  const loginSuccess = useSelector((state) => state.logIn);
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const [teammates,setteammates]=useState([])
  const [lead,setLead]=useState('')
  const [teamname,setTeamname]=useState('')

  const [datafetched,setDataFetched]=useState(false)
  const logOut=async()=>{
    const res=await axios.get(`${API}/auth/logout`,{withCredentials:true})
  }

  const getter=async()=>{
    const res=await axios.get(`${API}/auth/profile`,{withCredentials:true})
     
    if(res!=null)
      setDataFetched(true)
    setLead(res.data.lead.name)
    setteammates(res.data.members)
    setTeamname(res.data.lead.team)
    setVis(!res.data.lead.idea)
   
  }
  useEffect(() => {
    getter();
    if (!loginSuccess.isLoggedIn) 
    navigate("/Signin");
  });

  // variables
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [abstract, setAbstract] = useState("");
  const [vis,setVis]=useState(true)
  // const [otherdoc, setOtherdoc] = useState("");

  const IdeaSubmission = async(e) => {
   
    e.preventDefault();
    const data={
      title:title,
      category:category,
      description:abstract,
      team:teamname
    }
    const res=await axios.post(`${API}/idea/submit`,data,{withCredentials:true})
console.log(res)
    setTitle("");
    setCategory("");
    setDescription("");
    setAbstract("");
  };

  return (datafetched?
    <section className="IdeaSubmission" style={{ paddingTop: "6rem" }}>
      <h2  data-aos-duration="1300" data-aos-once="true">Idea Submission</h2>
      <div className="SubmissionContent"  data-aos-duration="1300" data-aos-once="true">
        <div className="IdeaTeamDetails">
          <div style={{ width: "80%", height: "80%" }}>
            <div class="idea-card">
              <div class="first-content">
                <h5>Team Name</h5>
                <p>{teamname}</p>
              </div>
              <div class="second-content">
                <h5>Team Members</h5>
                <p style={{ textAlign:'center',paddingBottom:'1rem' }}>{lead} (lead)</p>
                {teammates.map((mate,index)=><p key={index}>{mate.name}</p>)}
              </div>
            </div>
          </div>
        </div>
        <div className="SubmissionDiv">
        {vis?( <form
            action=""
            className="IdeaSubmissionForm"
            onSubmit={IdeaSubmission}
          >
            <input
              placeholder="Idea Title"
              type="text"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            {/* <label className="inputlabel">Select Category</label> */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
              style={{ width: "100%" }}
              required
            >
              <option className="dropdown-option" value="">
                -- Select Category --
              </option>
              <option className="dropdown-option" value="Health Care">
                Health Care
              </option>
              <option className="dropdown-option" value="Transportation">
                Transportation
              </option>
              <option className="dropdown-option" value="Social Stigma">
                Social Stigma
              </option>
              <option className="dropdown-option" value="Waste Management">
                Waste Management
              </option>
              <option className="dropdown-option" value="Blockchain">
                Blockchain
              </option>
              <option className="dropdown-option" value="Communication">
                Communication
              </option>
              <option
                className="dropdown-option"
                value="Environment & Agriculture"
              >
                Environment & Agriculture
              </option>
              <option className="dropdown-option" value="Security">
                Security
              </option>
              <option className="dropdown-option" value="Renewable Energy">
                Renewable Energy
              </option>
              <option className="dropdown-option" value="Disaster Management">
                Disaster Management
              </option>
              <option className="dropdown-option" value="Open Innovation">
                Open Innovation
              </option>
            </select>
            <textarea
              placeholder="short idea Description"
              type="text"
              className="input textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <textarea
              placeholder="Abstract"
              type="text"
              className="input textarea"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              required
            />
            {/* <div>
              <label className="inputlabel">
                Other Documents <span>(should be below 50MB)</span>
              </label>
              <input type="file" className="input" required />
            </div> */}
            <button type="submit" className="submit">
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">Send</span>
            </button>
          </form>) :(<h1>Idea submitted</h1>)}
         
          <div style={{ paddingTop: "1rem" }}>
           <br>
            </br>
            <button style={{ background:'none',border:'none' }} onClick={()=>{
   dispatch(loggedOut())
   logOut()
}}>logout</button>
          </div>
        </div>
      </div>
    </section> :<Loader/>
  );
}
