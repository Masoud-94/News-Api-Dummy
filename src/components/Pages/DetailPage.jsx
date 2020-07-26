import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SideBar from "../utils/SideBar";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./DetailPage.styles.scss";

class DetailPage extends Component {
  state = {};
  render() {
    return (
      <div className={"detail-page"}>
        <NavigationBar {...this.props} />
        <div className={"detail-page__banner mb-3"}>
          <Container>
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </div>
        <div className={"detail-page__content"}>
          <Container>
            <Row>
              <Col md={8}>{this.props.children}</Col>
              <Col md={4}>
                <SideBar />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default DetailPage;
