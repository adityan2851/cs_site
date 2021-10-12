import HomePage from "./screens/HomePage/HomePage";
// import AboutUs from './screens/AboutUs/AboutUs';
// import Navbar from "../src/components/Navbar";
import NavbarBootstrap from "../src/components/NavbarBootstrap";
import Footer from "../src/components/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GuestLecture from "./screens/Students/GuestLecture/GuestLecture";
import IndustrialVisit from "./screens/Students/IndustrialVisit/IndustrialVisit";
import Workshop from "./screens/Students/Workshop/Workshop";
import AboutUs from "./screens/AboutUs/AboutUs";
import Academics from "./screens/Academics/Academics";
// import Student from "./screens/Students/Student";
import Supervisors from "./screens/Research/Supervisors/Supervisors";
import Magazine from "./screens/Magazine/Magazine";
import ProfessionalActivity from "./screens/ProfessionalActivity/ProfessionalActivity";
import ResearchScholars from "./screens/Research/ResearchScholars/ResearchScholars";
import PhDAwarded from "./screens/Research/Ph.D Awarded/PhDAwarded";
import ResearchProjects from "./screens/Research/ResearchProjects/ResearchProjects";
import Laboratory from "./screens/Facility/Laboratory/Laboratory";
import AchievementsWrapper from "./screens/Achievements/AchievementsWrapper";
import FacultyWrapper from "./screens/Faculty/FacultyWrapper";
import Placements from "./screens/Placements/Placements";
import Placements from "./screens/Placements/Placements";
import ErrorPage404 from "./screens/ErrorPage404/ErrorPage404";

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
          <Route path="/placements" exact component={Placements} />

          {/* FACILITIES */}
          <Route path="/facility/laboratory" exact component={Laboratory} />
          <Route path="/faculty" exact component={FacultyWrapper} />
          <Route path="/achievements" exact component={AchievementsWrapper} />

          {/* NAVBAR ROUTES */}
          <Route path="/academics" exact component={Academics} />
          {/* <Route path="/student" exact component={Student} /> */}
          <Route path="/magazine" exact component={Magazine} />
          <Route
            path="/professional-activity"
            exact
            component={ProfessionalActivity}
          />
          <Route path="/page-error" exact component={ErrorPage404}/>
          <Redirect to="/page-error"/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
