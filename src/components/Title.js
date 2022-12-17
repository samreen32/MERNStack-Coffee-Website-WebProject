import React from 'react';
import coffeeHome from "../assets/images/coffee-cup.png";



export default function Title() {
  return (
    <div style={{ marginLeft: "36%", marginTop: "5%"}}>
        <img
            style={{ width: "45%", height: "45%", marginTop: "15%" }}
            src={coffeeHome}
        />
        <h1 style={{ color: "#FFBF00", marginLeft: "1%", fontSize: 65 }}>
            <i style={{ marginLeft: "2.5%" }}>
                Bubble Bee <br /> **Coffeèin**
            </i>
        </h1>
  </div>
  )
}
