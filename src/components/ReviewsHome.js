import React from "react";
import qoutes from "../assets/images/quote-img.png";
import pic1 from "../assets/images/pic-1.png";
import pic2 from "../assets/images/pic-2.png";
import pic3 from "../assets/images/pic-3.png";

export default function ReviewsHome() {
  const myStyle = {
    backgroundColor: "black",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
  };

  return (
    <div className="container" style={{ marginTop: "15%" }}>
      <h1 style={{ textAlign: "center", color: "#F0A500", fontSize: "5vw" }}>
        <i>Customer Review's</i>
      </h1>

      <div className="row row row-cols-md-3 g-4">
        <div className="col col-12">
          <div className="card" style={myStyle}>
            <img
              src={qoutes}
              className="card-img-top my-3"
              alt="menu1"
              style={{ height: "3rem", width: "3rem", alignSelf: "center" }}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <p className="card-text">
                <i>
                  Coffee was really smooth and has after taste
                  of chocolate.
                </i>
              </p>
              <img
                src={pic1}
                style={{
                  height: "6rem",
                  width: "6rem",
                  borderRadius: "3.5vw",
                  objectFit: "cover",
                }}
              />
              <h5 className="card-title mx-2 my-2" style={{ color: "#ec9a34"}}>
                <i>Park Chanyeol</i>
              </h5>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        </div>

        <div className="col col-12">
          <div className="card" style={myStyle}>
            <img
              src={qoutes}
              className="card-img-top my-3"
              alt="menu1"
              style={{ height: "3rem", width: "3rem", alignSelf: "center" }}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <p className="card-text">
                <i>
                  This is one of my favourites shop. You earned one regular cutomer.
                </i>
              </p>
              <img
                src={pic2}
                style={{
                  height: "6rem",
                  width: "6rem",
                  borderRadius: "3.5vw",
                  objectFit: "cover",
                }}
              />
              <h5 className="card-title my-2" style={{  color: "#ec9a34" }}>
                <i>Jennie</i>
              </h5>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        </div>
        
        <div className="col col-12">
          <div className="card" style={myStyle}>
            <img
              src={qoutes}
              className="card-img-top my-3"
              alt="menu1"
              style={{ height: "3rem", width: "3rem", alignSelf: "center" }}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <p className="card-text">
                <i>
                  Thought we would try a different coffee this time - glad I
                  did.
                </i>
              </p>
              <img
                src={pic3}
                style={{
                  height: "6rem",
                  width: "6rem",
                  borderRadius: "3.5vw",
                  objectFit: "cover",
                }}
              />
              <h5 className="card-title my-2" style={{ color: "#ec9a34" }}>
                <i>Kai</i>
              </h5>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
