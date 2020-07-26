import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./IntroNav.styles.scss";

const IntroNav = () => {
  return (
    <div className="text-white align-items-center intro-nav bg-dark">
      <Container>
        <Row>
          <Nav className="intro-nav__wrapper ">
            <Nav.Item className={"mr-auto "}>
              <h2>Welcom to my News-Api dummy website.</h2>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>
    </div>
  );
};

export default IntroNav;
