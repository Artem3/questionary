import React from "react";
import logo from "../logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg="info" expand="lg" className="py-0" sticky="top">
      <LinkContainer to="/questionnaire">
        <Navbar.Brand className="text-white">
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
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Navbar.Text>
          <Nav className="mr-auto">
            <LinkContainer to="/new">
              <Nav.Link>Create New</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>
                About
                <span />
                <Badge variant="warning">7</Badge>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
