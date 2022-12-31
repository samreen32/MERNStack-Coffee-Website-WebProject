import React, {} from "react";
import "../App.css";
import logo from "../assets/images/heart.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
 
  let location = useLocation();
  let redirect = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    redirect("/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" 
    // style={{position: "fixed", marginTop: "-5%"}}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            width="10%"
            height="10%"
            className="d-inline-block align-text-top"
          />
          <p className="d-inline-block align-text-top mx-2 my-3">
            <h3>
              <i>Bubble Bee Coffeèin</i>
            </h3>
          </p>
        </Link>
        <div className="App">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4" >
                <li className="nav-item mx-1">
                  <Link className={`nav-link ${location.pathname==="/"?"active":""}`} 
                    aria-current="page" to="/">
                    
                    <i className="fa-solid fa-mug-saucer fa-xl mx-2 my-2"></i>
                    <h6 className="my-1">
                      <i>Home</i>
                    </h6>
                    
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className={`nav-link ${location.pathname==="/About"?"active":""}`} to="/About"
                 >
                    <i className="fa-solid fa-eject fa-xl mx-2 my-2"></i>
                    <h6 className="my-1">
                      <i>About</i>
                    </h6>
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className={`nav-link ${location.pathname==="/Menu"?"active":""}`} to="/Menu">
                    <i className="fa-solid fa-bars fa-xl mx-2 my-2"></i>
                    <h6 className="my-1">
                      <i>Menu</i>
                    </h6>
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className={`nav-link ${location.pathname==="/Service"?"active":""}`} to="/Service">
                    <i className="fa-solid fa-bell-concierge fa-xl mx-2 my-2"></i>
                    <h6 className="my-1">
                      <i>Service</i>
                    </h6>
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className={`nav-link ${location.pathname==="/Review"?"active":""}`} to="/Review">
                    <i className="fa-solid fa-comment fa-xl mx-2 my-2"></i>
                    <h6 className="my-1">
                      <i>Review</i>
                    </h6>
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className={`nav-link ${location.pathname==="/ContactUs"?"active":""}`} to="/ContactUs">
                    <i className="fa-solid fa-address-card fa-xl mx-2 my-2"></i>
                    <h6 className="my-1">
                      <i>Contact</i>
                    </h6>
                  </Link>
                </li>

                <div className="col px-md-7" style={{marginLeft: "5%"}}>
                {!localStorage.getItem('token')? <form class="d-flex mx-3">
          
                    <li className="col-4 col-sm-4 nav-item">
                      <Link className={`nav-link ${location.pathname==="/Signup"?"active":""}`} to="/Signup">
                        <div>
                          <i class="fa-solid fa-user-plus fa-2xl my-4"></i>
                        </div>
                      </Link>
                    </li>
                    <li className="col-4 col-sm-4 mx-3 nav-item">
                      <Link className={`nav-link ${location.pathname==="/Login"?"active":""}`} to="/Login">
                        <div>
                          <i className="fa-solid fa-right-to-bracket fa-2xl my-4"></i>
                        </div>
                      </Link>
                    </li>
                  
                  </form> : 
                  <form class="d-flex mx-4">
                    <li className="col-4 col-sm-4 nav-item mx-2">
                      <Link className="nav-link" to="/">
                        <div>
                          <i className="fa-solid fa-cart-shopping fa-2xl my-4"></i>
                        </div>
                      </Link>
                    </li>

                    <li onClick={handleLogout} className="col-4 col-sm-4 nav-item">
                      <Link className= "nav-link" to="/">
                        <div>
                          <i class="fa-solid fa-right-to-bracket fa-xl mx-2 my-2"></i>
                          <h6 className="my-1">
                            <i>Logout</i>
                          </h6>
                        </div>
                      </Link>
                    </li>
                  </form>}
                  
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
