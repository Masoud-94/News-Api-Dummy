import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NewsComponent from "../utils/NewsComponent";
import "./HeaderNews.styles.scss";

const HeaderNews = ({ firstHeadline, headlines, headlines2 }) => {
  return (
    <div className={"col-wrapper py-sm-5 py-xs-3"}>
      <Container>
        <Row>
          <Col lg={6}>
            <Row>
              <NewsComponent
                componentHeight={"604px"}
                title={firstHeadline.title}
                description={firstHeadline.description}
                source={firstHeadline.source}
                url={firstHeadline.url}
                urlToImage={firstHeadline.urlToImage}
                publishedAt={firstHeadline.publishedAt}
                customClass={"mb-1 mr-lg-1 mr-0"}
              />
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              {headlines.map(
                (
                  { title, description, url, urlToImage, publishedAt, source },
                  index
                ) => (
                  <NewsComponent
                    key={index}
                    componentHeight={"300px"}
                    title={title}
                    description={description}
                    source={source}
                    url={url}
                    urlToImage={urlToImage}
                    publishedAt={publishedAt}
                    customClass={"mb-1 mr-1 headline"}
                  />
                )
              )}
            </Row>
            <Row>
              {headlines2.map(
                (
                  { title, description, url, urlToImage, publishedAt, source },
                  index
                ) => (
                  <NewsComponent
                    key={index}
                    componentHeight={"300px"}
                    title={title}
                    description={description}
                    source={source}
                    url={url}
                    urlToImage={urlToImage}
                    publishedAt={publishedAt}
                    customClass={"mb-1 mr-1 headline"}
                  />
                )
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderNews;
