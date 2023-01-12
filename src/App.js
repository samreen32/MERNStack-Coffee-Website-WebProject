import React, { } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AboutUs from "./components/AboutUs";
import Review from "./components/Review";
import MainMenu from "./components/MainMenu";
import CartForm from "./components/CartForm";
import Carts from "./components/Carts";


function App() {

  return (
    <>
      <Router>
        <Navbar />
       
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/ContactUs" element={<ContactUs />}></Route>
          <Route exact path="/AboutUs" element={<AboutUs />}></Route>
          <Route exact path="/Review" element={<Review />}></Route>
          <Route exact path="/MainMenu" element={<MainMenu />}></Route>
          <Route exact path="/CartForm" element={<CartForm />}></Route>
          <Route exact path="/Carts" element={<Carts />}></Route>

          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
