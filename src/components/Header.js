import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../App.css';  // Import the custom CSS file
import logo from '../assets/HerCycle.png';  // Import your image

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Brand Logo"
            height="100" // Adjust the height according to your needs
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">  {/* Add ms-auto class to push links to the right */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
            {/* <Button className="login-button" href="#login">LOGIN</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
