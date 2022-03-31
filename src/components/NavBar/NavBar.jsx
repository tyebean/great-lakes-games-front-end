import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Button, Form, FormControl, Container, NavDropdown } from 'react-bootstrap';

const NavBar = ({ user, handleLogout }) => {

  return (
    <>
      {user ?
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        :
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />

        </>

      }
    </>
  );
}

export default NavBar; 