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


function App() {

  return (
    <>
      <Router>
        <Navbar />
       
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/ContactUs" element={<ContactUs />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
