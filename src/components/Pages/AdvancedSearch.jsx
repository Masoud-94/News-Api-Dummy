import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import "./AdvancedSearch.styles.scss";
import { MdClose } from "react-icons/md";
import NewsComponentV2 from "../utils/NewsComponentV2";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";

class AdvancedSearch extends Component {
  state = {
    qTitle: "",
    isTitleOnly: false,
    includedDomains: [],
    excludedDomains: [],
    dateFrom: "",
    dateTo: "",
    sortBy: "",
    tempIncludeDomain: "",
    tempExcludeDomain: "",

    fetchedNews: []
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  toggleChange = () => {
    this.setState({
      isTitleOnly: !this.state.isTitleOnly
    });
  };
  handleInclude = () => {
    const domain = this.state.tempIncludeDomain.toLowerCase().trim();
    if (this.state.includedDomains.includes(domain) || domain === "") {
      this.setState({ tempIncludeDomain: "" });
    } else {
      const domains = [...this.state.includedDomains, domain];
      this.setState({ includedDomains: domains, tempIncludeDomain: "" });
    }
  };
  handleExclude = () => {
    const domain = this.state.tempExcludeDomain.toLowerCase().trim();
    if (this.state.excludedDomains.includes(domain) || domain === "") {
      this.setState({ tempExcludeDomain: "" });
    } else {
      const domains = [...this.state.excludedDomains, domain];
      this.setState({ excludedDomains: domains, tempExcludeDomain: "" });
    }
  };
  handleRemoveFromState = (domain, isInclude) => {
    if (isInclude) {
      const domains = this.state.includedDomains.filter(d => d !== domain);
      this.setState({ includedDomains: domains });
    } else {
      const domains = this.state.excludedDomains.filter(d => d !== domain);
      this.setState({ excludedDomains: domains });
    }
  };
  handleDateFrom = date => {
    this.setState({ dateFrom: date });
  };
  handleDateTo = date => {
    this.setState({ dateTo: date });
  };
  createAddress = () => {
    const {
      qTitle,
      isTitleOnly,
      includedDomains,
      excludedDomains,
      dateFrom,
      dateTo
    } = this.state;

    return `https://newsapi.org/v2/everything?${
      isTitleOnly ? "qInTitle" : "q"
    }=${qTitle}&domains=${includedDomains.join()}&excludeDomains=${excludedDomains.join()}&pageSize=5&apiKey=b7960abe6a064a35b8aab97636f707bf`;
  };
  fetchData = async address => {
    const response = await Axios.get(address);
    console.log(response.data.articles);
    this.setState({ fetchedNews: response.data.articles });
  };
  onSubmit = e => {
    e.preventDefault();
    this.fetchData(this.createAddress());
    console.log(this.createAddress());
    console.log(this.state.fetchedNews);
  };
  render() {
    return (
      <div className="advanced-search">
        <div className="advanced-search__form mb-3">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="query-title">
              <Form.Label className="font-weight-bold">Key Word</Form.Label>
              <Form.Control
                name="qTitle"
                type="text"
                placeholder="Please Enter Your KeyWord here..."
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group id="is-title-only">
              <Form.Check
                type="checkbox"
                label="search in tilte only if checked"
                name="isTitleOnly"
                checked={this.state.isTitleOnly}
                onChange={this.toggleChange}
              />
            </Form.Group>
            <Form.Group controlId="include-domain">
              <Form.Label className="font-weight-bold">
                Add domains to be included
              </Form.Label>
              <Form.Row>
                <Col md={9}>
                  <Form.Control
                    name="tempIncludeDomain"
                    value={this.state.tempIncludeDomain}
                    type="text"
                    placeholder="Any Domain to be included"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col className="mt-3 mt-md-0">
                  <Button variant="success" block onClick={this.handleInclude}>
                    Include
                  </Button>
                </Col>
              </Form.Row>
              <div>
                <div className="mt-3">
                  {this.state.includedDomains.map((domain, index) => (
                    <h4 className=" mr-1 d-inline" key={index}>
                      <Badge variant="secondary">
                        {domain}
                        <Button
                          className="ml-1"
                          size="sm"
                          variant="warning"
                          onClick={() =>
                            this.handleRemoveFromState(domain, index + 1)
                          }
                        >
                          <MdClose />
                        </Button>
                      </Badge>
                    </h4>
                  ))}
                </div>
              </div>
            </Form.Group>
            <Form.Group controlId="Exclude-domain">
              <Form.Label className="font-weight-bold">
                Add domains to be excluded
              </Form.Label>
              <Form.Row>
                <Col md={9}>
                  <Form.Control
                    name="tempExcludeDomain"
                    value={this.state.tempExcludeDomain}
                    type="text"
                    placeholder="Any Domain to be Excluded"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col className="mt-3 mt-md-0">
                  <Button variant="success" block onClick={this.handleExclude}>
                    Exclude
                  </Button>
                </Col>
              </Form.Row>
              <div>
                <div className="mt-3">
                  {this.state.excludedDomains.map((domain, index) => (
                    <h4 className=" mr-1 d-inline" key={index}>
                      <Badge variant="secondary">
                        {domain}
                        <Button
                          className="ml-1"
                          size="sm"
                          variant="warning"
                          onClick={() => this.handleRemoveFromState(domain, 0)}
                        >
                          <MdClose />
                        </Button>
                      </Badge>
                    </h4>
                  ))}
                </div>
              </div>
            </Form.Group>
            <Form.Group controlId="include-date">
              <Form.Label className="font-weight-bold">
                Add news <span className="text-info">FROM</span> specific date
              </Form.Label>
              {"       "}
              <DatePicker
                className={"form-control form-control-sm"}
                dateFormat="yyyy-MM-dd"
                highlightDates={new Date()}
                selected={this.state.dateFrom}
                onChange={this.handleDateFrom}
                placeholderText="Click to select a date"
              />
            </Form.Group>
            <Form.Group controlId="include-date ">
              <Form.Label className="font-weight-bold ">
                Add news <span className="text-info">UNTIL</span> specific date
              </Form.Label>
              {"           "}
              <DatePicker
                className={"form-control form-control-sm"}
                dateFormat="yyyy-MM-dd"
                todayButton="ToDay"
                selected={this.state.dateTo}
                onChange={this.handleDateTo}
                placeholderText="Click to select a date"
              />{" "}
              {"           "}
              <Form.Text className="text-muted d-inline">
                This option is better be today or let it be empty
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Search
            </Button>
          </Form>
        </div>
        <div className="advanced-srearch__result">
          {this.state.fetchedNews.map(
            (
              {
                title,
                description,
                url,
                urlToImage,
                publishedAt,
                sizesm,
                componentHeight
              },
              index
            ) => (
              <NewsComponentV2
                key={index}
                title={title}
                url={url}
                urlToImage={urlToImage}
                publishedAt={publishedAt}
                ImageHeight={"175px"}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default AdvancedSearch;
