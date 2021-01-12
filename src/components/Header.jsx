import React from "react";
import logo from "../logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg="info" expand="lg">
      <LinkContainer to="/questionnaire">
        <Navbar.Brand>
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block"
            alt="questionnaire logo"
          />
          The Qestionnaire
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/new">
            <Nav.Link>Create New</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
