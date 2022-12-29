import "../App.css";
import profile from "../assets/images/image1.png";
import Footer from "./Footer";
import Signup from "./Signup";
import { Link} from 'react-router-dom';

function Login(props) {
  return (
    <>
   
    <form>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1 style={{ color: "#F0A500" }}>Login</h1>

              <div>
                <input type="text" placeholder="Email" className="name" />
              </div>
              <div className="second-input">
                <input
                  type="password"
                  placeholder="Password"
                  className="name"
                />
              </div>
              <div className="login-button">
                <button className="button button--flex" onClick={Signup}>Login</button>
              </div>

              <p className="link">
                <a href="#" style={{ color: "#F0A500" }}>
                  Forgot password ?
                </a>
              </p>
              <p className="link">
                <Link to="Signup" style={{ color: "#F0A500" }}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
    <Footer />
    </>
  );
}

export default Login;
