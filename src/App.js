import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ContactUs from "./components/ContactUs";



function App() {
 

  return (
    <>
     <Router>
     <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/ContactUs" element={<ContactUs />}></Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
