import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import VAC from "../screens/Students/VAC/VAC";

const NavbarBootstrap = () => {
  const closeNavbar = (event) => {
    // const collapseElement = document.getElementsByClassName('collapse')
    // collapseElement.collapse();
    // $('.collapse').collapse()
    const navbarElement = document.getElementById("responsive-navbar-nav");
    navbarElement.classList.toggle("show");
    const navbarTogglerButton =
      document.getElementsByClassName("navbar-toggler")[0];
    navbarTogglerButton.classList.toggle("collapsed");
  };

  return (
    <Navbar
      className="translucent-navbar"
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Container style={{width:"auto"}}> 
      
        {/* <Navbar.Brand href="/">CSE</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <div className="me-auto"></div> */}
          <Nav className="">
            {/* <Nav.Link className="links nav-item " href="/academics">
              academics
            </Nav.Link>
            
            <Nav.Link className="nav-item" href="/student">
              student
            </Nav.Link>
            <Nav.Link className="nav-item" href="/research">
              research
            </Nav.Link>
            <Nav.Link className="nav-item" href="/magazine">
              magazine
            </Nav.Link>
            <Nav.Link className="nav-item" href="/professional-activity">
              professional acivity
            </Nav.Link> */}

            {/* <Link to="/academics" className="links nav-item nav-link">
              academics
            </Link> */}

            {/* <Link className="links nav-link nav-item" to="/student">
              students
            </Link> */}

            <NavDropdown title="Students" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item href="/achievements">
                Achievements
              </NavDropdown.Item>
              <NavDropdown.Item href="/guest-lecture">
                Guest Lecture
              </NavDropdown.Item>
              <NavDropdown.Item href="/workshop">Workshop</NavDropdown.Item>
              <NavDropdown.Item href="/industrial-visit">
                Industrial Visit
              </NavDropdown.Item>
              <NavDropdown.Item href="/vac" target="_blank" rel="noreferrer">
                Value Added Course
              </NavDropdown.Item>
              <NavDropdown.Item href="/pe" target="_blank" rel="noreferrer">
                Project Expo
              </NavDropdown.Item>
              <NavDropdown.Item href="/sp" target="_blank" rel="noreferrer">
                Social Programs
              </NavDropdown.Item>
              <NavDropdown.Item href="/sports" target="_blank" rel="noreferrer">
                Excel in Sports
              </NavDropdown.Item>
              <NavDropdown.Item href="/rank" target="_blank" rel="noreferrer">
                Rank UG
              </NavDropdown.Item> */}

              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/achievements"
                  onClick={closeNavbar}
                >
                  Achievements
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/guest-lecture"
                  onClick={closeNavbar}
                >
                  Guest Lecture
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/workshop"
                  onClick={closeNavbar}
                >
                  Workshop
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/industrial-visit"
                  onClick={closeNavbar}
                >
                  Industrial Visit
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/vac"
                  onClick={closeNavbar}
                >
                  Value Added Course
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/pe"
                  onClick={closeNavbar}
                >
                  Project Expo
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/sp"
                  onClick={closeNavbar}
                >
                  Social Programs
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/sports"
                  onClick={closeNavbar}
                >
                  Excel in Sports
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/rank"
                  onClick={closeNavbar}
                >
                  Rank UG
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Faculty" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/faculty"
                  onClick={closeNavbar}
                >
                  Faculty
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/mentors"
                  onClick={closeNavbar}
                >
                  Mentor
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/student-welfare"
                  onClick={closeNavbar}
                >
                  Student Welfare Committee
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Link
              className="links nav-link nav-item"
              to="/facility-laboratory"
              onClick={closeNavbar}
            >
              Facility
            </Link>

            <Link
              className="links nav-link nav-item"
              to="/alumni"
              onClick={closeNavbar}
            >
              Alumni
            </Link>

            <Link
              className="links nav-link nav-item"
              to="/placements"
              onClick={closeNavbar}
            >
              placements
            </Link>

            {/* <Link className="links nav-link nav-item" to="/research">
              research
            </Link> */}

            <NavDropdown title="Research" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item href="/supervisiors">
                Supervisors
              </NavDropdown.Item>
              <NavDropdown.Item href="/phD-awarded">
                PhD Awarded Dept Faculty
              </NavDropdown.Item>
              <NavDropdown.Item href="/research-scholars">
                Scholars
              </NavDropdown.Item>
              <NavDropdown.Item href="/research-projects">
                Projects
              </NavDropdown.Item>
              <NavDropdown.Item href="/patents">Patents</NavDropdown.Item>
              <NavDropdown.Item href="/publications">
                Publications
              </NavDropdown.Item> */}
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/supervisiors"
                  onClick={closeNavbar}
                >
                  Supervisors
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/phD-awarded"
                  onClick={closeNavbar}
                >
                  PhD Awarded Dept Faculty
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/research-scholars"
                  onClick={closeNavbar}
                >
                  Scholars
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/research-projects"
                  onClick={closeNavbar}
                >
                  Projects
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/patents"
                  onClick={closeNavbar}
                >
                  Patents
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/publications"
                  onClick={closeNavbar}
                >
                  Publications
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Link
              className="links nav-link nav-item"
              to="/gallery"
              onClick={closeNavbar}
            >
              Gallery
            </Link>
            <Link
              className="links nav-link nav-item"
              to="/events"
              onClick={closeNavbar}
            >
              Events
            </Link>

            <NavDropdown title="others" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item href="/magazine">Magazine</NavDropdown.Item>
              <NavDropdown.Item href="/newsletter">Newsletter</NavDropdown.Item>
              <NavDropdown.Item href="/professional-activity">
                Professional Activity
              </NavDropdown.Item>
              <NavDropdown.Item href="/developers-page">
                Credits
              </NavDropdown.Item> */}
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/magazine"
                  onClick={closeNavbar}
                >
                  Magazine
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/newsletter"
                  onClick={closeNavbar}
                >
                  Newsletter
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/professional-activity"
                  onClick={closeNavbar}
                >
                  Professional Activity
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="links nav-link nav-item"
                  to="/developers-page"
                  onClick={closeNavbar}
                >
                  Credits
                </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          {/* <Nav className="">
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarBootstrap;
