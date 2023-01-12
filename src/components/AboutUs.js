import React from "react";
import "../App.css";
import home from "../assets/images/home1.jpg";
import pic1 from "../assets/images/member.jpg";
import pic2 from "../assets/images/member_two.jpg";
import Footer from "./Footer";

export default function AboutUs() {
  const myStyle = {
    backgroundImage: `url(${home})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "floralwhite",
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
            <h1 style={{ fontSize: "4vw", color: "#F0A500" }}>ABOUT US</h1>
            <p style={{ color: "white", textAlign: "center" }}>
              Coffee is a brewed drink made from the roasted seeds of several
              species of an evergreen shrub. English word coffee comes from Dutch
              koffie, which came from Turkish kahve, which is, in turn, borrowed
              from Arabic qahwa, which is a short form of qahhwat al-bun which
              means “wine of the bean”. There is also theory that Turkish kahve
              because
              it was believed that this beverage dulls hunger.
            </p>
          </div>
        </header>

        <div className="container" style={{ marginTop: "15%" }}>
          <h1 style={{ color: "#ffbf00", textAlign: "center", fontSize: "3vw" }}>MEET OUR TEAM</h1>
          <p style={{ color: "white", textAlign: "center" }}>
            We all are very different.Born in different cities at different
            times, we love different music,food and movies.But we have something
            that unites us.This is our website,we are its heart,not just a team
            but are a family.
          </p>
          <div className="container">
            <div className="row row-row-cols-md-3 g-4" style={{ margin: "auto",
                textAlign: "center",
                alignItems: "center",}}>
              <div className="col mx-5" >
                <div
                  className="card bg-transparent mb-3 my-5 mx-5"
                >
                  <img
                    src={pic2}
                    class="card-img-top"
                    alt="..."
                    style={{ borderRadius: 150, height: 250, width: 250 }}
                  />
                  <div className="card-body" style={{marginLeft: "-26%"}}>
                    <h2
                      className="card-text"
                      style={{
                        color: "#ffbf00",
                        alignItem: "center",
                      }}
                    >
                      Rafia Aziz
                    </h2>
                    <h6
                      className="card-text mx-5"
                      style={{ color: "floralwhite" }}
                    >
                      Web Developer
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col mx-5">
                <div
                  class="card bg-transparent mb-3 my-5 mx-5"
                  style={{ width: "18rem"}}
                >
                  <img
                    src={pic1}
                    class="card-img-top"
                    alt="..."
                    style={{
                      borderRadius: 150,
                      height: 250,
                      width: 250,
                     
                    }}
                  />
                  <div class="card-body">
                    <h2
                      class="card-text"
                      style={{
                        color: "#ffbf00",
                        textAlign: "center",
                      }}
                    >
                      Samreen Karim
                    </h2>
                    <h6
                      className="card-text mx-5"
                      style={{ color: "floralwhite" }}
                    >
                      Web Developer
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
