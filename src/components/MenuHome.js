import React from "react";
// import about from "../assets/images/coffee-g56b167c18_1280.jpg";
import menu1 from "../assets/images/menu-1.png";
import menu2 from "../assets/images/menu-2.png";
import menu3 from "../assets/images/menu-3.png";
import menu4 from "../assets/images/menu-4.png";
import menu5 from "../assets/images/menu-5.png";
import menu6 from "../assets/images/menu-6.png";

export default function MenuHome() {
  const myStyle = {
    // backgroundImage: `url(${about})`,
    backgroundColor: "black",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "330px",
    color: "white",
  };

  return (
    <div className="container" style={{ marginTop: "15%" }}>
      <h1 style={{ textAlign: "center", color: "#F0A500", fontSize: "5vw" }}>
        <i>Our Menu</i>
      </h1>
      <div className="row row row-cols-md-3 g-4">
        <div className="col col-12">
          <div className="card" style={myStyle}>
            <img
              src={menu1}
              className="card-img-top my-3"
              alt="menu1"
              style={{ height: "8rem", width: "8rem", alignSelf: "center" }}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title" style={{ color: "#ec9a34"}}><i>Brazilian Coffee</i></h5>
              <p className="card-text"><i>
                A full-bodied, low acid coffee, with notes of peanut butter and
                toffee. Great for a person who is looking for darker roast and a
                full cup! <br />
              </i>
                $18.15
              </p>
            </div>
          </div>
        </div>
        <div className="col col-12">
          <div className="card" style={myStyle}>
            <img
              src={menu2}
              className="card-img-top my-3"
              alt="menu2"
              style={{ height: "8rem", width: "8rem", alignSelf: "center" }}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title" style={{ color: "#ec9a34"}}><i>Cascade Coffee</i></h5>
              <p className="card-text"><i>
                Our signature espresso blend consisting of a mix of Brazil and
                Guatemala. Easy to drink with notes of macadamia and dark
                chocolate.
              </i>
                <br />
                $18.15
              </p>
            </div>
          </div>
        </div>
        <div className="col col-12">
          <div className="card" style={myStyle}>
            <img
              src={menu3}
              className="card-img-top my-3"
              alt="menu3"
              style={{ height: "8rem", width: "8rem", alignSelf: "center" }}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title" style={{ color: "#ec9a34"}}><i>Guatemala Coffee</i></h5>
              <p className="card-text"><i>
                One of our most approachable and best-selling coffees,notes of
                milk chocolate and a lemony twist, it'll be everyone's favorite.
              </i>
                <br />
                $18.15
              </p>
            </div>
          </div>
        </div>
        <div className="col col-12">
          <div className="card" style={myStyle}>
            <img
              src={menu4}
              className="card-img-top my-3"
              alt="menu4"
              style={{ height: "8rem", width: "8rem", alignSelf: "center" }}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title" style={{ color: "#ec9a34"}}><i>Decaf Coffee</i></h5>
              <p className="card-text"><i>
                Savory and sweet, this Decaf coffee is exactly what you're
                looking for when you don't want the caffeine but want the taste
                of coffee.
              </i>
                <br />
                $18.15
              </p>
            </div>
          </div>
        </div>
        <div className="col col-12">
          <div className="card" style={myStyle}>
            <img
              src={menu5}
              className="card-img-top my-3"
              alt="menu5"
              style={{ height: "8rem", width: "8rem", alignSelf: "center" }}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title" style={{ color: "#ec9a34"}}><i>Batch Coffee</i></h5>
              <p className="card-text"><i>
                Batch brewed coffee offering dark chocolate flavour with honey
                mix. This is exactly what is right for your exam prepration.
              </i>
                <br />
                $3.03
              </p>
            </div>
          </div>
        </div>
        <div className="col col-12">
          <div className="card" style={myStyle}>
            <img
              src={menu6}
              className="card-img-top my-3"
              alt="menu6"
              style={{ height: "8rem", width: "8rem", alignSelf: "center" }}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <h5 className="card-title" style={{ color: "#ec9a34"}}><i>Nutala Coffee</i></h5>
              <p className="card-text">
                <i>
                  It's a combo of hot milk with alot of Nutala beans which are
                  specially made in Bubble bee Coffeèin industory only!
                </i>
                <br />
                15.9$
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
