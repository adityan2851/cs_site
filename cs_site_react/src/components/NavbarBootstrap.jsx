import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <Navbar.Brand href="/website">CSE</Navbar.Brand>
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

            <Link to="/academics" className="links nav-item nav-link">
              academics
            </Link>

            <Link className="links nav-link nav-item" to="/student">
              student
            </Link>
            <Link className="links nav-link nav-item" to="/research">
              research
            </Link>
            <Link className="links nav-link nav-item" to="/magazine">
              magazine
            </Link>
            <Link
              className="links nav-link nav-item"
              to="/professional-activity"
            >
              professional acivity
            </Link>

            <NavDropdown title="others" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Magazine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Newsletter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
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
