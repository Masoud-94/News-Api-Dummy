import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Footer = () => {
  return (
    <div className={"footer bg-dark py-5"}>
      <Container>
        <Row>
          <Col sm={4} className={"text-white"}>
            <h4>About</h4>
            <p>
              Hi ! my name is TripleM. I'm front end developer and this is my
              dummy news website.
            </p>
          </Col>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
