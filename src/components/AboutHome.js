import React from "react";
import aboutImg from "../assets/images/about-img.jpeg";
import about from "../assets/images/img.jpg";

export default function AboutHome() {
  const myStyle = {
    backgroundImage: `url(${about})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: '330px',
  };

  return (
    <>
    <div className="container" style={{ marginTop: "15%" }}>
    <h1 style={{textAlign: "center",  color: "#F0A500", fontSize: "5vw"}}><i>About Us</i></h1>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-5">
            <img
              src={aboutImg}
              class="img-fluid rounded-start"
              alt="about image"
            />
          </div>

          <div class="col-md-7" style={{backgroundColor: "black", color: "white" }}>
            <div class="card-body" style={{color: "white"}}>
              <h2 class="card-title mx-2 my-3" style={{ color: "#ec9a34"}}>
                <i>What Makes Our Coffee Special?</i>
              </h2>
              <p class="card-text mx-2 my-3" style={{fontSize: "1.1vw"}}>
                <i>
                  The word "bubble bee coffeèin" is the combination of latin
                  roots, bee meaning "self", and coffeèin meaning "to discover".
                  We believe that self-discovery happens through experience.
                  That's why our mission is to engage people with an immensely
                  satisfying experience. <br /> <br />
                  The craft of coffee brewing runs in our cores. We are proud to
                  be involved in the whole coffee making process — from picking
                  the best beans to roasting and bringing out the unique flavors
                  and aromas. We can't wait to welcome you for a comforting cup
                  of coffee.
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
