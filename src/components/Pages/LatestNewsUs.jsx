import React, { Component } from "react";
import Axios from "axios";
import NewsComponentV2 from "../utils/NewsComponentV2";

class LatestNewsUs extends Component {
  state = {
    LatestNewsUs: []
  };

  async componentDidMount() {
    const response = await Axios.get(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=b7960abe6a064a35b8aab97636f707bf"
    );
    this.setState({ LatestNewsUs: response.data.articles });
    console.log(this.state.LatestNewsUs);
  }
  render() {
    return (
      <div>
        {this.state.LatestNewsUs.map(
          ({
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            sizesm,
            componentHeight,
            ImageHeight
          }) => (
            <NewsComponentV2
              url={url}
              title={title}
              urlToImage={urlToImage}
              componentHeight={"200px"}
              ImageHeight={"181px"}
            />
          )
        )}
      </div>
    );
  }
}

export default LatestNewsUs;
