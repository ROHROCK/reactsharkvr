import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.component.css";
import { Link, BrowserRouter } from "react-router-dom";

class NavbarComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light" href="#">
        <a className="navbar-brand">
          <BrowserRouter>
            <Link to="/">
              <img
                src="assest/logo.png"
                width="35"
                height="35"
                className="d-inline-block align-top"
                alt=""
              />
            </Link>
          </BrowserRouter>
          <div className="text-align-center d-inline-block pl-2">SharkVR</div>
        </a>
        <div className="navbar_container">
          <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">HOME</Nav.Link>{" "}
                <Nav.Link href="#link">FEATURES</Nav.Link>{" "}
                <Nav.Link href="#home">TECHNOLOGIES</Nav.Link>{" "}
                <Nav.Link href="#link">TEAM</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
