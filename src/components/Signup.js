import "../App.css";
import React, { useState } from "react";
import profile from "../assets/images/image1.png";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let redirect = useNavigate();

  //Function
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      //Save the auth token and redirect.
      localStorage.setItem("token", json.authToken);
      redirect("/");
      alert("Account has been Created", "Success");
    }else{
      alert("Invalid Credentials", "Oops");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1 style={{ color: "#F0A500" }}>Sign Up</h1>
              <form onSubmit={handleSignupSubmit}>
                <div className="second-input">
                  <input
                    type="Full Name"
                    placeholder="Full Name"
                    className="name"
                    name="name" id="name" 
                    value={credentials.name} 
                    onChange={onChange}
                  />
                </div>
                <div className="second-input">
                  <input type="text" placeholder="Email" className="name" name="email" id="email" 
                  value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
                </div>
                <div className="second-input">
                  <input
                    type="password"
                    placeholder="Password"
                    className="name"
                    name="password" id="password"
                value={credentials.password} onChange={onChange} minLength={5} required
                  />
                </div>
                <div className="second-input">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="name"
                    name="cpassword" id="cpassword"
                value={credentials.cpassword} onChange={onChange} minLength={5} required
                  />
                </div>
                <div className="login-button">
                  <button className="button button--flex" type="submit">Signup</button>
                </div>
                <p className="link">
                  <Link to="/Login" style={{ color: "#F0A500" }}>
                    Already Have an Account?
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
