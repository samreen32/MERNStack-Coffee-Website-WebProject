import "../App.css";
import profile from "../assets/images/image1.png";
import Footer from "./Footer";
import { Link} from 'react-router-dom';

function Signup() {
  return (
    <>
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1 style={{ color: "#F0A500" }}>Sign Up</h1>
            <div>
              <input type="text" placeholder="Email" className="name" />
            </div>
            <div className="second-input">
              <input
                type="Full Name"
                placeholder="Full Name"
                className="name"
              />
            </div>
            <div className="second-input">
              <input type="password" placeholder="Password" className="name" />
            </div>
            <div className="second-input">
              <input
                type="password"
                placeholder="Confirm Password"
                className="name"
              />
            </div>
            <div className="login-button">
              <button className="button button--flex">Signup</button>
            </div>
            <p className="link">
              <Link to="/Login" style={{ color: "#F0A500" }}>
                Already Have an Account?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Signup;
