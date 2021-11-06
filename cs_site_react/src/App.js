import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";
import NavbarBootstrap from "../src/components/NavbarBootstrap";
import Footer from "../src/components/Footer/Footer";
import GuestLecture from "./screens/Students/GuestLecture/GuestLecture";
import IndustrialVisit from "./screens/Students/IndustrialVisit/IndustrialVisit";
import Workshop from "./screens/Students/Workshop/Workshop";
import AboutUs from "./screens/AboutUs/AboutUs";
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
import ErrorPage404 from "./screens/ErrorPage404/ErrorPage404";
import Patents from "./screens/Patents/Patents";
import ResearchPublication from "./screens/Research/Publications/Publication";
import AlumniWrapper from "./screens/Alumni/Alumni";
// import Pops from "./screens/DevelopersPage/Pops";
import StudentWelfare from "./screens/StudentWelfare/StudentWelfare";
import Mentors from "./screens/Mentors/Mentors";

import ScrollToTop from "../src/components/ScrollToTop";

import VAC from "./screens/Students/VAC/VAC.jsx";
import ProjectExpo from "./screens/Students/ProjectExpo/ProjectExpo";
import SocialProgram from "./screens/Students/SocialProgram/SocialProgram";

import "./App.css";
import Sports from "./screens/Students/Sports/Sports";
import Rank from "./screens/Students/Rank/Rank";
import {
  p_14,
  p_15,
  p_16,
  p_17,
  p_18,
  p_19,
} from "./screens/Placements/PlacedData";
import Dev from "./screens/DevelopersPage/Dev";

function App() {
  return (
    <div className="App">
      {/* basename={"/website"} */}
      <HashRouter>
        <NavbarBootstrap />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/guest-lecture" exact component={GuestLecture} />
          <Route path="/industrial-visit" exact component={IndustrialVisit} />
          <Route path="/workshop" exact component={Workshop} />
          <Route path="/supervisiors" exact component={Supervisors} />
          <Route path="/research-scholars" exact component={ResearchScholars} />
          <Route path="/phD-awarded" exact component={PhDAwarded} />
          <Route path="/research-projects" exact component={ResearchProjects} />
          <Route path="/placements" exact component={Placements} />
          <Route path="/student-welfare" exact component={StudentWelfare} />

          <Route path="/patents" exact component={Patents} />
          <Route path="/Publications" exact component={ResearchPublication} />
          <Route path="/alumni" exact component={AlumniWrapper} />
          <Route path="/mentors" exact component={Mentors} />

          <Route path="/developers-page" exact component={Dev} />
          <Route path="/vac" exact component={VAC} />
          <Route path="/pe" exact component={ProjectExpo} />
          <Route path="/sp" exact component={SocialProgram} />
          <Route path="/sports" exact component={Sports} />
          <Route path="/rank" exact component={Rank} />

          <Route path="/19" exact component={p_19} />
          <Route path="/18" exact component={p_18} />
          <Route path="/17" exact component={p_17} />
          <Route path="/16" exact component={p_16} />
          <Route path="/15" exact component={p_15} />
          <Route path="/14" exact component={p_14} />

          {/* FACILITIES */}
          <Route path="/facility-laboratory" exact component={Laboratory} />
          <Route path="/faculty" exact component={FacultyWrapper} />
          <Route path="/achievements" exact component={AchievementsWrapper} />

          {/* NAVBAR ROUTES */}
          {/* <Route path="/academics" exact component={Academics} /> */}
          {/* <Route path="/student" exact component={Student} /> */}
          <Route path="/magazine" exact component={Magazine} />
          <Route
            path="/professional-activity"
            exact
            component={ProfessionalActivity}
          />
          <Route path="/page-error" exact component={ErrorPage404} />
          <Redirect to="/page-error" />
        </Switch>
      <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
