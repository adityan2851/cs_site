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
import AboutUs from "./screens/AboutUs/AboutUs";
import Academics from "./screens/Academics/Academics";
import Student from "./screens/Student/Student";
import Supervisors from "./screens/Research/Supervisors/Supervisors";
import Magazine from "./screens/Magazine/Magazine";
import ProfessionalActivity from "./screens/ProfessionalActivity/ProfessionalActivity";
import ResearchScholars from "./screens/Research/ResearchScholars/ResearchScholars"
import PhDAwarded from "./screens/Research/Ph.D Awarded/PhDAwarded"
import ResearchProjects from "./screens/Research/ResearchProjects/ResearchProjects";
import FacultyWrapper from "./screens/faculty/FacultyWrapper";

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
          <Route path="/supervisiors" exact component={Supervisors} />
          <Route path="/research-scholars" exact component={ResearchScholars} />
          <Route path="/phD-awarded" exact component={PhDAwarded} />
          <Route path="/researchProjects" exact component={ResearchProjects} />

          <Route path="/faculty" exact component={FacultyWrapper} />

          {/* NAVBAR ROUTES */}
          <Route path="/academics" exact component={Academics} />
          <Route path="/student" exact component={Student} />
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
