import HomePage from "./screens/HomePage/HomePage";
// import AboutUs from './screens/AboutUs/AboutUs';
// import Navbar from "../src/components/Navbar";
import NavbarBootstrap from "../src/components/NavbarBootstrap";
import Footer from "../src/components/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GuestLecture from "./screens/GuestLecture/GuestLecture";
import IndustrialVisit from "./screens/IndustrialVisit/IndustrialVisit";
import Workshop from "./screens/Workshop/Workshop";
import Supervisiors from "./screens/Supervisiors/Supervisiors";
import AboutUs from "./screens/AboutUs/AboutUs";
import Academics from "./screens/Academics/Academics";
import Student from "./screens/Student/Student";
import Research from "./screens/Research/Research";
import Magazine from "./screens/Magazine/Magazine";
import ProfessionalActivity from "./screens/ProfessionalActivity/ProfessionalActivity";

function App() {
  return (
    <div className="App">
      <Router basename={"/website"}>
        <NavbarBootstrap />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/guest-lecture" exact component={GuestLecture} />
          <Route path="/industrial-visit" exact component={IndustrialVisit} />
          <Route path="/workshop" exact component={Workshop} />
          <Route path="/supervisiors" exact component={Supervisiors} />

          {/* NAVBAR ROUTES */}
          <Route path="/academics" exact component={Academics} />
          <Route path="/student" exact component={Student} />
          <Route path="/research" exact component={Research} />
          <Route path="/magazine" exact component={Magazine} />
          <Route
            path="/professional-activity"
            exact
            component={ProfessionalActivity}
          />
        </Switch>
      </Router>
      /<Footer />
    </div>
  );
}

export default App;
