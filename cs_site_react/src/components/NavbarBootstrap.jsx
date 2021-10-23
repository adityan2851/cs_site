import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import vsc from "../assets/pdfs/students/vsc.pdf";
import sports from "../assets/pdfs/students/sports.pdf";
import rank from "../assets/pdfs/students/rank.pdf";
import pe from "../assets/pdfs/students/pe.pdf";
import ngo from "../assets/pdfs/students/ngo.pdf";

const NavbarBootstrap = () => {
  return (
    <Navbar
      className="translucent-navbar"
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="/">CSE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="me-auto"></div>
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
              <NavDropdown.Item href="/achievements">
                Achievements
              </NavDropdown.Item>
              {/* <Link to="/achievements">Achievements</Link> */}
              <NavDropdown.Item href="/guest-lecture">
                Guest Lecture
              </NavDropdown.Item>
              <NavDropdown.Item href="/workshop">Workshop</NavDropdown.Item>
              <NavDropdown.Item href="/industrial-visit">
                Industrial Visit
              </NavDropdown.Item>
              <NavDropdown.Item href={vsc} target="_blank">
                Value Added Course
              </NavDropdown.Item>
              <NavDropdown.Item href={pe} target="_blank">
                Project Expo
              </NavDropdown.Item>
              <NavDropdown.Item href={ngo} target="_blank">
                Social Programs
              </NavDropdown.Item>
              <NavDropdown.Item href={sports} target="_blank">
                Excel in Sports
              </NavDropdown.Item>
              <NavDropdown.Item href={rank} target="_blank">
                Rank UG
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Faculty" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/faculty">Faculty</NavDropdown.Item>
              <NavDropdown.Item href="/mentors">Mentor</NavDropdown.Item>
              <NavDropdown.Item href="/studentwelfare">
                Student Welfare Committee
              </NavDropdown.Item>
            </NavDropdown>

            <Link className="links nav-link nav-item" to="/facility-laboratory">
              Facility
            </Link>

            <Link className="links nav-link nav-item" to="/alumni">
              Alumni
            </Link>

            <Link className="links nav-link nav-item" to="/placements">
              placements
            </Link>

            {/* <Link className="links nav-link nav-item" to="/research">
              research
            </Link> */}

            <NavDropdown title="Research" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/supervisiors">
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
              </NavDropdown.Item>
            </NavDropdown>

            <Link className="links nav-link nav-item" to="/gallery">
              Gallery
            </Link>
            <Link className="links nav-link nav-item" to="/events">
              Events
            </Link>

            <NavDropdown title="others" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/magazine">Magazine</NavDropdown.Item>
              <NavDropdown.Item href="/newsletter">Newsletter</NavDropdown.Item>
              <NavDropdown.Item href="/professional-activity">
                Professional Activity
              </NavDropdown.Item>
              <NavDropdown.Item href="/developers-page">
                Credits
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
