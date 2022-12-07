import React from "react";
import Slider1 from "../assets/images/blog-1.jpeg";
import Slider2 from "../assets/images/Slider2.png";
import Slider3 from "../assets/images/coffee-cup.png";
import hotDeal from "../assets/images/hot-deal.png";

export default function Slider() {
  return (
    <div class="row row-content">
      <div class="col">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img class="d-block img-fluid"  style={{ width: "45%", height: "40%", 
              marginLeft: "4%" }}
               src="https://get.pxhere.com/photo/cafe-coffee-morning-restaurant-cup-latte-bell-cappuccino-drink-cash-register-mocha-checkout-bills-985852.jpg" alt="Slider 1" />
              <div class="carousel-caption d-none d-md-block" style={{color: "#F6EABE"}}>
                <h2><i><b>
                    Americano latte
                </b>
                    <img style={{ width: "5%", height: "5%" }} src={hotDeal} />
                    <span class="badge badge-pill badge-secondary">$14.99</span>
                  </i>
                </h2>
                <p class="d-none d-sm-block"><b>
                  A unique combination of 1/4 espresso and 3/4 milk, and the
                  milk is steamed and frothed. On the other hand, an Americano
                  is made with espresso and double the amount of hot water.
                </b></p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" style={{ width: "45%", height: "40%%", 
              marginLeft: "4%" }}
               src="https://yourbrooklynguide.com/wp-content/uploads/2019/12/Coffee-in-Kos-Kaffe-Park-Slope-Brooklyn-862x575.jpg" alt="Buffet" />
              <div class="carousel-caption d-none d-md-block" style={{color: "#F6EABE"}}>
                <h2><i><b>
                  Weekend Grand 
                </b></i>
                  <span class="badge badge-danger">NEW</span>
                </h2>
                <p class="d-none d-sm-block">
                 <b>Featuring mouthwatering combinations with a choice of five
                  different tasts, six enticing appetizers, six main entrees
                  and five choicest desserts. Free flowing bubbly and soft
                  drink. All for just $19.99 per person</b> 
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" style={{ width: "45%", height: "40%", 
              marginLeft: "4%" }}
              src="https://assets3.thrillist.com/v1/image/3022594/1584x1056/crop;webp=auto;jpeg_quality=60;progressive.jpg" alt="Alberto" />
              <div class="carousel-caption d-none d-md-block" style={{color: "#F6EABE"}}>
                <i><b>
                  <h2>Bee Coffeèin</h2>
                  <h4>Coffeeo Coffeèin</h4>
                  </b></i>
                <p class="d-none d-sm-block">
                  <b>Award winning three-star Michelin chef with wide International
                  Coffee homes. Wormly welcomed customer having alot of satisfied customers. 
                  We believe that coffee is more than just a drink: It's a culture, an economy, 
                  an art, a science — and a passion.</b> 
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-indicators" /*indicators */>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
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
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            style={{marginLeft: "-3%"}}
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            style={{marginRight: "-3%"}}
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
