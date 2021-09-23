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
import AboutUs from "./screens/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/guest-lecture" exact component={GuestLecture} />
          <Route path="/industrial-visit" exact component={IndustrialVisit} />
          <Route path="/workshop" exact component={Workshop} />
          <Route path="/supervisiors" exact component={Supervisiors} />
        </Switch>
      </Router>
      /<Footer />
    </div>
  );
}

export default App;
