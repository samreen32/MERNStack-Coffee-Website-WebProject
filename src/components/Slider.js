import React from "react";
import Slider1 from "../assets/images/cake.png";
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
              <img class="d-block img-fluid"  style={{ width: "30%", height: "30%", marginLeft: "7%" }}
               src=" https://get.pxhere.com/photo/cafe-coffee-morning-restaurant-cup-latte-bell-cappuccino-drink-cash-register-mocha-checkout-bills-985852.jpg" alt="Slider 1" />
              <div class="carousel-caption d-none d-md-block">
                <h2>
                  <i>
                    Americano latte
                    <img style={{ width: "5%", height: "5%" }} src={hotDeal} />
                    <span class="badge badge-pill badge-secondary">$14.99</span>
                  </i>
                </h2>
                <p class="d-none d-sm-block">
                  A unique combination of 1/4 espresso and 3/4 milk, and the
                  milk is steamed and frothed. On the other hand, an Americano
                  is made with espresso and double the amount of hot water.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid"  style={{ width: "35%", height: "35%", marginLeft: "7%" }}
               src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_455,q_60,w_810/v1/clients/asheville/1806_tradeandlore_009_547e4176-b32a-4ae0-98c7-56e8134b4d59.jpg" alt="Buffet" />
              <div class="carousel-caption d-none d-md-block">
                <h2>
                  Weekend Grand Buffet
                  <span class="badge badge-danger">NEW</span>
                </h2>
                <p class="d-none d-sm-block">
                  Featuring mouthwatering combinations with a choice of five
                  different salads, six enticing appetizers, six main entrees
                  and five choicest desserts. Free flowing bubbly and soft
                  drinks. All for just $19.99 per person
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid"  style={{ width: "30%", height: "30%", marginLeft: "7%" }}
              src="https://assets3.thrillist.com/v1/image/3022594/1584x1056/crop;webp=auto;jpeg_quality=60;progressive.jpg" alt="Alberto" />
              <div class="carousel-caption d-none d-md-block">
                <h2>Alberto Somayya</h2>
                <h4>Executive Chef</h4>
                <p class="d-none d-sm-block">
                  Award winning three-star Michelin chef with wide International
                  experience having worked closely with whos-who in the culinary
                  world, he specializes in creating mouthwatering Indo-Italian
                  fusion experiences.
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
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
