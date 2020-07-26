import React from "react";
import Col from "react-bootstrap/Col";
import Moment from "react-moment";
import "moment-timezone";
import "./NewsComponent.styles.scss";

const NewsComponent = ({
  title,
  description,
  source,
  url,
  urlToImage,
  publishedAt,
  sizesm,
  componentHeight,
  customClass,
}) => {
  return (
    <Col
      sm={sizesm}
      className={`HeaderNewsComponent ${customClass}`}
      style={{
        backgroundImage: `url(${urlToImage})`,
        height: componentHeight,
      }}
    >
      <h5>
        <span className="badge badge-secondary p-1 mt-3">
          {source ? source.name : ""}
        </span>
      </h5>

      <a href={url} className={"stretched-link"}>
        <div className={"HeaderNewsComponent__content"}>
          <h5>{title}</h5>
          <span>
            <Moment format="YY/MM/DD">{publishedAt}</Moment>
          </span>
        </div>
      </a>
    </Col>
  );
};

export default NewsComponent;
