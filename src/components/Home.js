import "../App.css";
import home from "../assets/images/img.jpg";
import AboutHome from "./AboutHome";
import Slider from "./Slider";
import MenuHome from "./MenuHome";
import ReviewsHome from "./ReviewsHome";
import Footer from "./Footer";
import Title from "./Title";


function App() {
  const myStyle = {
    backgroundImage: `url(${home})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <div style={myStyle}>
        <Title />
        <Slider />
        <AboutHome />
        <MenuHome />
        <ReviewsHome />
        <div style={{marginTop: "20%"}}>
        <Footer />

        </div>
      </div>
    </>
  );
}

export default App;
