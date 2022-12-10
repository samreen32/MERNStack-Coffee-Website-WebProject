import React from "react";
import hotDeal from "../assets/images/hot-deal.png";
import newDeal from "../assets/images/new.png";


export default function Slider() {
  return (
    <div className="container" style={{ marginTop: "20%" }}>
      <div className="row row-content">
        <div className="col">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  className="d-block img-fluid"
                  style={{ width: "45%", height: "40%"}}
                  src="https://get.pxhere.com/photo/cafe-coffee-morning-restaurant-cup-latte-bell-cappuccino-drink-cash-register-mocha-checkout-bills-985852.jpg"
                  alt="Slider 1"
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={{ color: "#F6EABE" }}
                >
                  <h2 style={{color: "black" }}>
                    <i>
                      <b>Americano latte</b>
                      <img
                        style={{ width: "6%", height: "6%" }}
                        src={hotDeal}
                      />
                      <span className="badge badge-pill badge-secondary" style={{color: "red"}}>
                        $14.99
                      </span>
                    </i>
                  </h2>
                  <p className="d-none d-sm-block" style={{fontSize: "20px" }}>
                    <b>
                      A unique combination of 1/4 espresso and 3/4 milk, and the
                      milk is steamed and frothed. On the other hand, an
                      Americano is made with espresso and double the amount of
                      hot water.
                    </b>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block img-fluid"
                  style={{ width: "45%", height: "40%"}}
                  src="https://yourbrooklynguide.com/wp-content/uploads/2019/12/Coffee-in-Kos-Kaffe-Park-Slope-Brooklyn-862x575.jpg"
                  alt="Buffet"
                />
                <div
                  className="carousel-caption d-none d-md-block"
                >
                  <h2 style={{ color: "black" }}>
                    <i>
                      <b>Weekend Grand</b>
                    </i>
                    <img className="mx-2" style={{ width: "6%", height: "6%" }} src={newDeal}
                    />
                  </h2>
                  <p className="d-none d-sm-block" style={{ fontSize: "20px" }}>
                    <b>
                      Featuring mouthwatering combinations with a choice of five
                      different tasts, six enticing appetizers, six main entrees
                      and five choicest desserts. Free flowing bubbly and soft
                      drink. All for just $19.99 per person
                    </b>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block img-fluid"
                  style={{ width: "45%", height: "40%"}}
                  src="https://assets3.thrillist.com/v1/image/3022594/1584x1056/crop;webp=auto;jpeg_quality=60;progressive.jpg"
                  alt="Alberto"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h2 style={{ color: "#FFBF00" }}><i><b>Bee Coffeèin</b></i></h2>
                  <h4 style={{ color: "black" }}><b><i>Coffeeo Coffeèin</i></b></h4>
        
                  <p className="d-none d-sm-block" style={{ fontSize: "20px" }}>
                    <b>
                      Award winning three-star Michelin chef with wide
                      International Coffee homes. Wormly welcomed customer
                      having alot of satisfied customers. We believe that coffee
                      is more than just a drink: It's a culture, an economy, an
                      art, a science — and a passion.
                    </b>
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-indicators" /*indicators */>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <button //pre-next button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              style={{ marginLeft: "-8%" }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
              style={{ marginRight: "-8%" }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
