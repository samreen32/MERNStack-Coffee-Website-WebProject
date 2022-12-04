import "./App.css";
import home from "./assets/images/home-img.jpeg";
import coffeeHome from "./assets/images/tea-leaf.png"
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const myStyle = {
    backgroundImage: `url(${home})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (

    <div style={myStyle}>
      <Navbar style={{zIndex: 1}}/>
      <div style={{marginLeft: "36%", marginTop: "22%"}}>
        <img style={{width: "45%", height: "45%"}} src={coffeeHome}/>
        <h1 style={{color: "white",marginLeft: "5%", fontSize: 50}}><i 
        style={{marginLeft: "2.5%"}}>Bubble Bee <br/> **Coffeèin**</i></h1>
      </div>
      <div style={{marginTop: "20%"}}>
        <Slider />
      </div>
    </div>
  );
}

export default App;
