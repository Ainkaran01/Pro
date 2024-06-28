import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link as ScrollLink } from "react-scroll";

const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="nav"
      bg="light"
      variant="light"
    >
      {" "}
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex align-center justify-content-between"
        ></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {" "}
          {/* <img
            className="logo"
            alt="Logo"
            src="pic1.jpg"
            width="60"
            height="60"
          /> */}
          <Nav className="me-auto middle">
            <Nav.Link>
              <ScrollLink
                to="carousel"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </ScrollLink>
            </Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Electric & Electronic
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Construction
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Event Management
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <ScrollLink to="about" smooth={true} offset={-300} duration={500}>
                About
              </ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink
                to="review"
                smooth={true}
                offset={-300}
                duration={500}
              >
                Reviews
              </ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-280}
                duration={500}
              >
                Contact Us
              </ScrollLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
