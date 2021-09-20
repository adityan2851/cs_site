import HomePage from "./screens/HomePage/HomePage";
// import AboutUs from './screens/AboutUs/AboutUs';
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GuestLecture from "./screens/GuestLecture/GuestLecture";
import IndustrialVisit from "./screens/IndustrialVisit/IndustrialVisit";
import Workshop from "./screens/Workshop/Workshop";
import Supervisiors from "./screens/Supervisiors/Supervisiors";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        {/* <HomePage /> */}
        {/* <AboutUs /> */}
        {/* <GuestLecture /> */}
        {/* <IndustrialVisit /> */}
        {/* <Workshop /> */}
        <Supervisiors />
      </Router>
      /{/* <Footer/> */}
    </div>
  );
}

export default App;
