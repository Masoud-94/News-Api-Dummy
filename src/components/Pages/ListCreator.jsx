import React, { Component } from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import NewsComponentV2 from "../utils/NewsComponentV2";
import "./ListCreator.styles.scss";

class ListCreator extends Component {
  state = {
    categories: [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ],
    languages: [
      "ar",
      "de",
      "en",
      "es",
      "fr",
      "he",
      "it",
      "nl",
      "no",
      "pt",
      "ru",
      "se",
      "ud",
      "zh",
    ],
    countries: [
      "ae",
      "ar",
      "at",
      "au",
      "be",
      "bg",
      "br",
      "ca",
      "ch",
      "cn",
      "co",
      "cu",
      "cz",
      "de",
      "eg",
      "fr",
      "gb",
      "gr",
      "hk",
      "hu",
      "id",
      "ie",
      "il",
      "in",
      "it",
      "jp",
      "kr",
      "lt",
      "lv",
      "ma",
      "mx",
      "my",
      "ng",
      "nl",
      "no",
      "z",
      "ph",
      "pl",
      "pt",
      "ro",
      "rs",
      "ru",
      "sa",
      "se",
      "sg",
      "si",
      "sk",
      "th",
      "tr",
      "tw",
      "ua",
      "us",
      "ve",
      "za",
    ],
    category: [],
    language: [],
    country: [],
    customNews: [],
  };
  makeQuery = () => {
    const { language, country, category } = this.state;

    return `language=${language}&country=${country}&category=${category}`;
  };
  fetchData = async (query) => {
    const response = await Axios.get(
      `http://newsapi.org/v2/sources?${query}&apiKey=b7960abe6a064a35b8aab97636f707bf`
    );
    console.log(response.data.sources);
    this.setState({ customNews: response.data.sources });
  };
  handleChange = (e) => {
    const { name, id } = e.target;
    this.setState({ [name]: id });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchData(this.makeQuery());
  };
  render() {
    return (
      <div className={"form-list"}>
        <Form onSubmit={this.handleSubmit}>
          <div key="category-list" className="mb-3">
            <h3>Pick your choosen category:</h3>
            {this.state.categories.map((c, index) => (
              <Badge pill variant="primary" key={index}>
                <Form.Check
                  inline
                  label={c}
                  name="category"
                  type="radio"
                  value={c}
                  id={c}
                  key={c}
                  onChange={this.handleChange}
                />
              </Badge>
            ))}
          </div>

          <div key="lang-list" className="mb-3 form-group ">
            <h3>Pick your prefered language:</h3>
            {this.state.languages.map((c, index) => (
              <Badge pill variant="info" key={index}>
                <Form.Check
                  inline
                  label={c}
                  name="language"
                  type="radio"
                  value={c}
                  id={c}
                  key={c}
                  onChange={this.handleChange}
                />
              </Badge>
            ))}
          </div>

          <div key="country-list" className="mb-3">
            <h3>Pick your country or countries:</h3>
            {this.state.countries.map((c, index) => (
              <Badge pill variant="secondary" key={index}>
                <Form.Check
                  inline
                  label={c}
                  name="country"
                  type="radio"
                  value={c}
                  id={c}
                  key={c}
                  onChange={this.handleChange}
                />
              </Badge>
            ))}
          </div>

          <Button variant="primary" type="submit" value="submit">
            Submit
          </Button>
        </Form>

        <div>
          <div>
            {this.state.customNews.map(
              ({
                title,
                description,
                url,
                urlToImage,
                publishedAt,
                sizesm,
                componentHeight,
              }) => (
                <NewsComponentV2
                  url={url}
                  title={title}
                  urlToImage={urlToImage}
                  componentHeight={"200px"}
                />
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ListCreator;
