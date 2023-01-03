import React from 'react';
import coffeeHome from "../assets/images/main1.png";


export default function Title() {
  return (
    <>
    <div class="container">
        <div class="card bg-transparent text-dark">
            <div style={{marginLeft: "36%", marginTop: "5%"}}>
                <img class="card-img-top"
                    style={{ width: "45%", height: "45%", marginTop: "15%" }}
                    src={coffeeHome}
                />
                <div class="card-body" style={{marginLeft: "-6%"}}>
                    <h1 class="card-title" style={{ color: "#F0A500", fontSize: "5vw"}}>
                        <p class="card-text mx-1"><i className='mx-3'>
                           Bubble Bee</i><br /><i>**Coffeèin**
                        </i></p>
                    </h1>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}
