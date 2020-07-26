import React, { Component } from "react";
import Axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MidSection from "./MidSection";
import SideBar from "../utils/SideBar";

class MainContent extends Component {
  state = {
    midsectionCategory: "business",
    midsectionNews: [],
    midSectionFirstNews: {},
  };
  fetchNewsMidSection = async (category) => {
    const response = await Axios.get(
      `http://newsapi.org/v2/top-headlines?category=${category}&country=us&pageSize=4&apiKey=b7960abe6a064a35b8aab97636f707bf`
    );
    this.setState({ midsectionNews: response.data.articles.splice(0, 4) });
    this.setState({ midSectionFirstNews: this.state.midsectionNews.shift() });
  };
  handelCategoryChange = (e) => {
    this.setState({ midsectionCategory: e });
    this.fetchNewsMidSection(e);
  };
  handleSubmit = (e) => {
    e.preventdefault();
  };
  componentDidMount() {
    this.fetchNewsMidSection(this.state.midsectionCategory);
  }

  render() {
    return (
      <div className={"mt-sm-5"}>
        <Container>
          <Row>
            <Col lg={8}>
              <MidSection
                category={this.handelCategoryChange}
                newsList={this.state.midsectionNews}
                firstNews={this.state.midSectionFirstNews}
              />
            </Col>
            <Col lg={4}>
              <SideBar onSubmit={this.handleSubmit} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainContent;
