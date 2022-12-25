import React from "react";
import "../App.css";
import coffeeHome from "../assets/images/main1.png";
import Footer from "./Footer";
import home from "../assets/images/home2.jpg";

export default function ContactUs() {
  const myStyle = {
    backgroundImage: `url(${home})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "floralwhite"
  };
  return (
    <>
    <div style={myStyle}>

      <header class="jumbotron">
        <div
          class="container"
          style={{
            margin: "auto",
            display: "block",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <div class="row row-header">
            <div
              class="col-12 col-sm-6"
              style={{
                margin: "auto",
                display: "block",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "4vw", color: "#ec9a34" }}> Contact Us</h1>
              <p className="my-3">
                <b>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </b>
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-12 align-self-center my-3">
            <img src={coffeeHome} width={200} height={200} class="img-fluid" />
          </div>
        </div>
      </header>

      <div className="container">
        <div class="card bg-transparent mb-3 my-5" style={{ maxHeight: "50%"}}>
          <div class="row g-0">
            <div class="col-md-4">
              <iframe 
                style={{height: "100%", width: "100%"}}
                class="img-fluid rounded-start"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title" style={{ textAlign: "center", color: "#ec9a34" }}>
                  Get In Touch
                </h2>
                <div class="col-12 col-md-9"  style={{alignItems: "center", margin: "auto"}} >
                  <form  style={{textAlign: "center" }} >
                    <div class="inputBox mb-3">
                    <i class="fa-solid fa-user fa-xl"></i>
                      <input style={{textAlign: "center", background: "floralwhite" }} type="text" class="form-control mx-3" placeholder="name" />
                    </div>
                    <div class="inputBox mb-3">
                      <span class="fas fa-envelope fa-xl"></span>
                      <input style={{textAlign: "center", background: "floralwhite" }} type="email" class="form-control mx-3" placeholder="email" />
                    </div>
                    <div class="inputBox mb-3">
                    <i class="fa-solid fa-phone fa-2xl"></i>
                      <input style={{textAlign: "center", background: "floralwhite" }} type="number" class="form-control mx-3" placeholder="number" />
                    </div>
                    <button type="submit" class="button button--flex" >Contact Us</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
   
    </>
  );
}
