import React from "react";
import "../App.css";
import logo from "../assets/images/heart.png";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width="9%"
            height="9%"
            className="d-inline-block align-text-top"
          />
          <p className="d-inline-block align-text-top mx-3 my-2">
            <i>Bubble Bee Coffeèin</i>{" "}
          </p>
        </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
              <li className="nav-item mx-1">
                <a className="nav-link active" aria-current="page" href="#">
                <div className="navbar-listItems">      
                    <i className="fa-solid fa-mug-saucer mx-2"></i>
                    <i>Home</i> 
                </div>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#about">
                  <i className="fa-solid fa-eject mx-2"></i>
                  <i>About</i>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-bars mx-2"></i>
                  <i>Menu</i>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-bell-concierge mx-2"></i>
                  <i>Service</i>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-comment mx-2"></i>
                  <i>Review</i>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-address-card mx-2"></i>
                  <i>Contact</i>
                </a>
              </li>

                <div>
                    <input class="form-control me-5 mx-5 my-3" type="search" 
                    placeholder="Search here..." aria-label="Search"/>
                </div>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    <i className="fa-solid fa-magnifying-glass fa-xl mx-5 my-4"></i>
                    </a>
                </li>
                <li className="nav-item mx-1">
                    <a className="nav-link" href="#">
                        <div id="search-btn">
                            <i className="fa-solid fa-cart-shopping fa-xl  my-4"></i>
                        </div>
                    </a>
                </li>
            
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
