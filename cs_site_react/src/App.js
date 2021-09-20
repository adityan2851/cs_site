import HomePage from "./screens/HomePage/HomePage";
// import AboutUs from './screens/AboutUs/AboutUs';
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GuestLecture from "./screens/GuestLecture/GuestLecture";
import IndustrialVisit from "./screens/IndustrialVisit/IndustrialVisit";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        {/* <HomePage /> */}
        {/* <AboutUs /> */}
        {/* <GuestLecture /> */}
        <IndustrialVisit />
      </Router>
      /{/* <Footer/> */}
    </div>
  );
}

export default App;
