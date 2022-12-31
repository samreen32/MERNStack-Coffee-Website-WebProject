import "../App.css";
import profile from "../assets/images/image1.png";
import Footer from "./Footer";
import React, {useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [credentials, setCredentials] = useState({email: "", password: ""});
  let redirect = useNavigate();

//Function
const handleLoginSubmit = async (e)=>{
  e.preventDefault();

//Api call
  const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password}) 
    });
    const json = await response.json();
    console.log(json);

    if(json.success){
      localStorage.setItem('token', json.authToken);      
     alert("You have been Logged in", "Success");
      redirect("/");                             
    
    }else{
      alert("Invalid Credentials", "Oops");
    }
}


const onChange =(e)=>{
  setCredentials({...credentials, [e.target.name]: e.target.value});      
}

return (
    <>
   
    <form onSubmit={handleLoginSubmit}>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1 style={{ color: "#F0A500", fontSize: "3.5vw" }}>Login</h1>

              <div className="second-input">
                <input type="text" placeholder="Email" className="name"  name="email" id="email" 
                value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
              </div>
              <div className="second-input">
                <input
                  type="password"
                  placeholder="Password"
                  className="name"
                  name="password" id="password"
                value={credentials.password} onChange={onChange}
                />
              </div>
              <div className="login-button">
                <button type="submit" className="button button--flex">Login</button>
              </div>

              <p className="link">
                <Link to="/" style={{ color: "#F0A500" }}>
                  Forgot password ?
                </Link>
              </p>
              <p className="link">
                <Link to="/Signup" style={{ color: "#F0A500" }}>
                  New Member? Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
    <Footer />
    </>
  );
}

export default Login;
