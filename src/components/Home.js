import "../App.css";
import home from "../assets/images/img.jpg";
import About from "./About";
import Slider from "./Slider";
import Menu from "./Menu";
import Reviews from "./Reviews";
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
        <About />
        <Menu />
        <Reviews />
        <div style={{marginTop: "20%"}}>
        <Footer />

        </div>
      </div>
    </>
  );
}

export default App;
