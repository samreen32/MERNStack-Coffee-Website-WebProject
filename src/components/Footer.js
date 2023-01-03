import React from 'react';
import "../App.css";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";


export default function Footer() {
  return (
  
    <footer class="footer" style={{backgroundColor: "black", color: "white"}}>
        <div class="container">
            <div class="row mx-3">
                <div class="col col-6">
                    <div class="row">
                        <div class="col-4 offset-1 col-sm-2 my-4" >
                            <h5 style={{ color: "#ec9a34"}}><b><i>Links</i></b></h5>
                            <ul class="list-unstyled">
                                <li><a style={{color: "white"}} href="#">Home</a></li>
                                <li><a style={{color: "white"}} href="./About.js">About</a></li>
                                <li><a style={{color: "white"}} href="./Menu.js">Menu</a></li>
                                <li><a style={{color: "white"}} href="#">Service</a></li>
                                <li><a style={{color: "white"}} href="#">Review</a></li>
                                <li><a style={{color: "white"}} href="./ContactUs.js">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-8 col-sm-7 mx-4 my-4">
                            <h5 style={{ color: "#ec9a34"}}><b><i>Our Address</i></b></h5>
                            <address>
                                <i> H-9, 4 Khayaban-e-Johar,<br/>
                                44000, Islamabad Capital Territory<br/>
                                PAKISTAN</i><br/>
                                <i class="fa fa-phone fa-lg"></i>: +852 1234 5678<br/>
                                <i class="fa fa-fax fa-lg"></i>: +852 8765 4321<br/>
                                <i class="fa fa-envelope fa-lg"></i>: 
                                <a style={{color: "white"}} href="mailto:beeCoffeèin@food.net">beeCoffeèin@food.net</a>
                            </address>
                        </div>
                    </div>
                </div>      
                <div class="col col-6">
                    <div class="row mx-3">      
                        <div class="col col-sm-4 my-4 mx-3" style={{alignText: "center"}}>
                            <h5 style={{marginLeft: "9%", color: "#ec9a34"}}><b><i>Connect Us On</i></b></h5>
                            <div class="text-center">
                                <a style={{color: "white"}} class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus"></i></a>
                                <a style={{color: "white"}} class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook"></i></a>
                                <a style={{color: "white"}} class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin"></i></a>
                                <a style={{color: "white"}} class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                                <a style={{color: "white"}} class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                                <a style={{color: "white"}} class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                
                        <div class="col col-sm-4 my-4 mx-5">
                            <h5 style={{ color: "#ec9a34"}}><b><i> We Accept All Credit Cards</i></b></h5>
                            <div class="col-12 footer__cards">
                                <img src={card1} alt="" class="footer__card"/>
                                <img src={card2} alt="" class="footer__card"/>
                                <img src={card3} alt="" class="footer__card"/>
                                <img src={card4} alt="" class="footer__card"/>
                            </div>
                        </div>
                    </div> 
                </div> 
              
           </div>
           <div class="row justify-content-center">             
                <div class="col-auto">
                    <p>© Copyright 2021 NUML</p>
                </div>
           </div>
        </div>
    </footer>

  )
}
