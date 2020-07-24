import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NewsComponentV2.styles.scss";
import Image from "react-bootstrap/Image";
import Moment from "react-moment";
import "moment-timezone";
import noImage from "../../assets/NoImage.svg";
import Truncate from "react-truncate";

const NewsComponentV2 = ({
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  sizesm,
  componentHeight,
  ImageHeight
}) => {
  return (
    <div
      className={"HeaderNewsComponentv2"}
      style={{ height: componentHeight }}
    >
      <Row className="">
        <Col xs={6}>
          <a
            href={url}
            className={"stretched-link HeaderNewsComponentv2__content--link"}
          >
            <Image
              style={{ height: ImageHeight }}
              src={urlToImage ? urlToImage : noImage}
              alt="news image not available"
            />
          </a>
        </Col>
        <Col xs={6} className="px-1">
          <a
            href={url}
            className={"stretched-link HeaderNewsComponentv2__content--link"}
          >
            <div className={"HeaderNewsComponentv2__content"}>
              <h5>
                <Truncate lines={4}>{title}</Truncate>
              </h5>
              <span class="time">
                <Moment format="YY/MM/DD">{publishedAt}</Moment>
              </span>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default NewsComponentV2;
