import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import "./NavigationBar.styles.scss";

const NavigationBar = ({ ...otherProps }) => {
  const handleSelect = (selectedKey) => {
    otherProps.history.push(selectedKey);
    console.log(otherProps);
  };

  return (
    <div>
      <Container>
        <Row>
          <Navbar
            sticky="top"
            expand="lg"
            className={"navigation-bar bg-white p-lg-0"}
            onSelect={handleSelect}
          >
            <Navbar.Brand className={"ml-md-4 ml-xs-0  b"}>
              <Link to="/">
                <span className="navbar-brand--1"> NEWS </span>
                <span className="navbar-brand--2"> API</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="ml-auto">
                <Nav.Link
                  className={`nav-link p-xs-0 py-md-3 px-md-3 pl-xs-1 pl-md-0 ${
                    otherProps.history.location.pathname === "/" ? "active" : ""
                  }`}
                  eventKey="/"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  eventKey="/detail/latestnewsUs"
                  className={`nav-link p-xs-0 py-md-3 px-md-3 pl-xs-1 pl-md-0 ${
                    otherProps.history.location.pathname ===
                    "/detail/latestnewsUs"
                      ? "active"
                      : ""
                  }`}
                >
                  US News
                </Nav.Link>

                <Nav.Link
                  className={`nav-link p-xs-0 py-md-3 px-md-3 pl-xs-1 pl-md-0 ${
                    otherProps.history.location.pathname ===
                    "/detail/AdvancedSearch"
                      ? "active"
                      : ""
                  }`}
                  eventKey="/detail/AdvancedSearch"
                >
                  Advanced search
                </Nav.Link>
                <Nav.Link
                  className={`nav-link p-xs-0 py-md-3 px-md-3 pl-xs-1 pl-md-0 ${
                    otherProps.history.location.pathname === "/detail/aboutme"
                      ? "active"
                      : ""
                  }`}
                  eventKey="/detail/aboutme"
                >
                  About me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};

export default NavigationBar;
