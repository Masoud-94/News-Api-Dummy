import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NewsComponent from "../utils/NewsComponent.jsx";
import NewsComponentV2 from "../utils/NewsComponentV2.jsx";
import "./MidSection.styles.scss";

const MidSection = ({ newsList, category, firstNews }) => {
  return (
    <Row>
      <div className="mid-section mid-section__nav mb-3 ">
        <Nav onSelect={category} defaultActiveKey="business">
          <span className={"mid-section__nav--brand mr-auto font-weight-bold "}>
            Categories
          </span>
          <Nav.Item>
            <Nav.Link className={"align-middle"} eventKey="business">
              Business
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="entertainment">Entertainment</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="sports">Sports</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="health">Health</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="science">Science</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="technology">Technology</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <Row>
        <Col lg={6} className={"mb-3"}>
          <NewsComponent
            title={firstNews.title}
            urlToImage={firstNews.urlToImage}
            publishedAt={firstNews.publishedAt}
            url={firstNews.url}
            source={firstNews.source}
            componentHeight={"450px"}
          />
        </Col>

        <Col lg={6} className={"mb-3"}>
          {newsList.map((news, index) => (
            <NewsComponentV2
              key={index}
              title={news.title}
              urlToImage={news.urlToImage}
              publishedAt={news.publishedAt}
              url={news.url}
              sizesm={12}
              componentHeight={"150px"}
              ImageHeight={"140px"}
            />
          ))}
        </Col>
      </Row>
    </Row>
  );
};

export default MidSection;
