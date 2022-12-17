import "./App.css";
import home from "./assets/images/home.jpg";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Title from "./components/Title";


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
        <Navbar />
        <Title />
        <Slider />
        <About />
        <Menu />
        <Reviews />
        <Footer />
      </div>
    </>
  );
}

export default App;
