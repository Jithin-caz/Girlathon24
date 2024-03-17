import axios from "axios";
import "./signin.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn, teamRegistered } from "../../redux/action";
import { redirect, useNavigate } from "react-router-dom";


import Loader from "../loader/loader";

export default function Signin() {
  const API = import.meta.env.VITE_API;
  // console.log({process.env.API})
  console.log(API);
  const [state, setState] = useState(true);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loginSuccess = useSelector((state) => state.logIn);
  const isTeamRegistered = useSelector((state) => state.teamRegistered);
  // login variables
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [datafetched, setDataFetched] = useState(true);
  useEffect(() => {
    if (loginSuccess.isLoggedIn) navigate("/dash");
  });
  const loginEvent = async (e) => {
    e.preventDefault();
    setDataFetched(false);
    const data = {
      email: user,
      password: password,
    };
    const res = await axios
      .post(`${API}/auth/login`, data, { withCredentials: true })
      .catch((e) => {
        alert("wrong email or password");
        setDataFetched(true);
      });
    if (res != null) setDataFetched(true);
   

    if (res.status === 201) {
      dispatch(loggedIn());
      navigate("/dash");
    }

    if (res.data.user.team != null) {
      dispatch(teamRegistered(res.data.user.team));
     
    }
  };

  //signup variables

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const registerEvent = async (e) => {
    e.preventDefault();
    setDataFetched(false);
    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password1,
    };
    if (password1 !== password2) {
      alert("Password does not match");
      setDataFetched(true);
      return;
    }
    const response = await axios
      .post(`${API}/user/register`, data, { withCredentials: true })
      .catch((e) => {
        alert("Network error");
        setDataFetched(true);
      });

    if (response != null) setDataFetched(true);
    
    if (response.status == 230) {
      alert("This email already exists");
      setState(true);
    } else if (response.status == 200) {
      dispatch(loggedIn());
      const data2 = {
        email: email,
        password: password1,
      };
      const res = await axios.post(`${API}/auth/login`, data2, {
        withCredentials: true,
      });
      navigate("/dash");
      
    }

   
  };

  const login = (
    <div className="section login">
      <div className="form-container" style={{ maxWidth:'50rem' }}>
        <p className="title">Login</p>
        <form className="form" onSubmit={loginEvent}>
          <div className="input-group">
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder=""
              value={user}
              required="required"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required="required"
              name="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password ?
              </a>
            </div>
          </div>
          <button type="submit" className="sign">
            Sign in
          </button>
        </form>

        <p className="signup">
          Haven't registered yet?{" "}
          <button
            style={{ background: "none", border: "none" }}
            rel="noopener noreferrer"
            onClick={() => {
              setState(false);
            }}
            className=""
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
  const register = (
    <div className="section login">
      <div className="form-container" style={{ maxWidth:'50rem' }}>
        <p className="title">Register</p>
        <form className="form" onSubmit={registerEvent}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required="required"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone No.</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required="required"
              placeholder=""
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              id="email"
              required="required"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required="required"
              id="password"
              placeholder=""
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              required="required"
              placeholder=""
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <button className="sign">Register</button>
        </form>

        <p className="signup">
          Already Registered?{" "}
          <button
            style={{ background: "none", border: "none" }}
            rel="noopener noreferrer"
            onClick={() => {
              setState(true);
            }}
            className=""
          >
            login
          </button>
        </p>
      </div>
    </div>
  );
  return state ? (
    datafetched ? (
      login
    ) : (
      <Loader />
    )
  ) : datafetched ? (
    register
  ) : (
    <Loader />
  );
}
