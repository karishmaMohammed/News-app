import { Container, Navbar, Nav } from "react-bootstrap"
import brandLogo from '../assets/brand-logo.png'
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
	return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            alt="logo"
            src={brandLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          News App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent