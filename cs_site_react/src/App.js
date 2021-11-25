import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
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

import Dev from "./screens/DevelopersPage/Dev";
import TestingPage from "./screens/TestingPage/TestingPage";
import {
  P_19,
  P_18,
  P_17,
  P_16,
  P_15,
  P_14,
} from "./screens/Placements/PlacedData";
import AlumniWrapper1 from "./screens/Gallery/Alumni";
import PDFViewer from "./components/PDFViewer/PDFViewer";

function App() {
  return (
    <div className="App">
      {/* basename={"/website"} */}
      <HashRouter>
        <NavbarBootstrap />
        <ScrollToTop />
        <Switch>
          <Route path="/testing" exact component={TestingPage} />

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
          <Route path="/gallery" exact component={AlumniWrapper1} />

          <Route path="/patents" exact component={Patents} />
          <Route path="/Publications" exact component={ResearchPublication} />
          <Route path="/alumni" exact component={AlumniWrapper} />
          <Route path="/mentors" exact component={Mentors} />

          <Route path="/developers-page" exact component={Dev} />
          <Route
            path="/vac"
            exact
            render={() => (
              <VAC pdf={"https://stjosephscse.com/pdfs/students/vsc.pdf"} />
            )}
          />
          <Route
            path="/pe"
            exact
            render={() => (
              <ProjectExpo
                pdf={"https://stjosephscse.com/pdfs/students/pe.pdf"}
              />
            )}
          />
          <Route
            path="/sp"
            exact
            render={() => (
              <SocialProgram
                pdf={"https://stjosephscse.com/pdfs/students/ngo.pdf"}
              />
            )}
          />
          <Route
            path="/sports"
            exact
            render={() => (
              <Sports
                pdf={"https://stjosephscse.com/pdfs/students/sports.pdf"}
              />
            )}
          />
          <Route
            path="/rank"
            exact
            render={() => (
              <Rank pdf={"https://stjosephscse.com/pdfs/students/rank.pdf"} />
            )}
          />

          <Route
            path="/19"
            exact
            render={() => (
              <P_19
                pdf={"https://stjosephscse.com/pdfs/placements/2018-2019.pdf"}
              />
            )}
          />
          <Route
            path="/18"
            exact
            render={() => (
              <P_18
                pdf={"https://stjosephscse.com/pdfs/placements/2018-2019.pdf"}
              />
            )}
          />
          <Route
            path="/17"
            exact
            render={() => (
              <P_17
                pdf={"https://stjosephscse.com/pdfs/placements/2017-2018.pdf"}
              />
            )}
          />
          <Route
            path="/16"
            exact
            render={() => (
              <P_16
                pdf={"https://stjosephscse.com/pdfs/placements/2016-2017.pdf"}
              />
            )}
          />
          <Route
            path="/15"
            exact
            render={() => (
              <P_15
                pdf={"https://stjosephscse.com/pdfs/placements/2015-2016.pdf"}
              />
            )}
          />
          <Route
            path="/14"
            exact
            render={() => (
              <P_14
                pdf={"https://stjosephscse.com/pdfs/placements/2014-2015.pdf"}
              />
            )}
          />

          {/* FACILITIES */}
          <Route path="/facility-laboratory" exact component={Laboratory} />
          <Route path="/faculty" exact component={FacultyWrapper} />
          <Route path="/achievements" exact component={AchievementsWrapper} />

          {/* NAVBAR ROUTES */}
          {/* <Route path="/academics" exact component={Academics} /> */}
          {/* <Route path="/student" exact component={Student} /> */}

          {/* MAGAZINE ROUTES */}
          <Route path="/magazine" exact component={Magazine} />
          <Route
            path="/magazine_1"
            exact
            render={() => (
              <PDFViewer
                pdf={"https://stjosephscse.com/pdfs/magazines/17.pdf"}
              />
            )}
          />

          
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
