import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import menu1 from "../assets/images/about-img.jpeg";
import menu2 from "../assets/images/blog-1.jpeg";
import Footer from "./Footer";

export default function MainMenu() {
  return (
    <div>
      <div className="row my-5">
        <div className="col mx-5">
          <div class="card" style={{ width: "18rem" }}>
            <img src={menu2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Robusta Coffee</h5>
              <p class="card-text">
                Affogato ~ meaning 'drowned', is espresso served over ice cream
                Americano ~ is espresso toppedan foamed hot milk and foam.
              </p>
              <Link to="/CartForm" className="button button--flex">
                Order Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img src={menu1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Americano Coffee</h5>
              <p class="card-text">
                Affogato ~ meaning 'drowned', is espresso served over ice cream
                Americano ~ is espresso toppedan foamed hot milk and foam.
              </p>
              <Link to="/CartForm" className="button button--flex">
                Order Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img src={menu2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Machiato Coffee</h5>
              <p class="card-text">
                Affogato ~ meaning 'drowned', is espresso served over ice cream
                Americano ~ is espresso toppedan foamed hot milk and foam.
              </p>
              <Link to="/CartForm" className="button button--flex">
                Order Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col mx-5">
          <div class="card" style={{ width: "18rem" }}>
            <img src={menu1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Iced Coffee</h5>
              <p class="card-text">
                Affogato ~ meaning 'drowned', is espresso served over ice cream
                Americano ~ is espresso toppedan foamed hot milk and foam.
              </p>
              <Link to="/CartForm" className="button button--flex">
                Order Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col my-3">
          <div class="card" style={{ width: "18rem" }}>
            <img src={menu2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Iced Coffee</h5>
              <p class="card-text">
                Affogato ~ meaning 'drowned', is espresso served over ice cream
                Americano ~ is espresso toppedan foamed hot milk and foam.
              </p>
              <Link to="/CartForm" className="button button--flex">
                Order Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={menu1}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Iced Coffee</h5>
              <p class="card-text">
              Affogato ~ meaning 'drowned', is espresso served over ice cream
                Americano ~ is espresso toppedan foamed hot milk and foam.
              </p>
              <Link to="/CartForm" className="button button--flex">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop: "20%"}}>
      <Footer /> 

      </div>
   
    </div>
  );
}
