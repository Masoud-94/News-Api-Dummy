import React, { Component } from "react";
import HeaderNews from "./HeaderNews";

import "./Header.styles.scss";
import Axios from "axios";
import NavigationBar from "../NavigationBar/NavigationBar";

class Header extends Component {
  state = {
    headlines: [],
    headlines2: [],
    firstHeadline: {}
  };

  async componentDidMount() {
    const response = await Axios.get(
      "http://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=b7960abe6a064a35b8aab97636f707bf"
    );
    this.setState({ firstHeadline: response.data.articles.shift() });
    this.setState({ headlines: response.data.articles.slice(0, 2) });
    this.setState({ headlines2: response.data.articles.slice(2, 4) });
  }
  render() {
    return (
      <div className={"Header-wrapper mb-3  pb-sm-3 pb-xs-1 pt-sm-5 "}>
        <NavigationBar {...this.props} />
        <HeaderNews
          firstHeadline={this.state.firstHeadline}
          headlines={this.state.headlines}
          headlines2={this.state.headlines2}
        />
      </div>
    );
  }
}

export default Header;
