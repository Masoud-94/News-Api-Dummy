import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainContent from "./components/content/MainContent";
import Footer from "./components/Footer/Footer";
import DetailPage from "./components/Pages/DetailPage";

import AdvancedSearch from "./components/Pages/AdvancedSearch";
import LatestNewsUs from "./components/Pages/LatestNewsUs";
import IntroNav from "./components/utils/IntroNav";

import "./custom.scss";

import "./App.scss";
import AboutMe from "./components/Pages/AboutMe";

function App() {
  return (
    <Router>
      <div className="App">
        <IntroNav />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <Header {...props} />
                <MainContent />
              </div>
            )}
          ></Route>
          <Route
            exact
            path="/detail/latestnewsUs"
            render={props => (
              <DetailPage {...props}>
                <LatestNewsUs />
              </DetailPage>
            )}
          />

          <Route
            exact
            path="/detail/AdvancedSearch"
            render={props => (
              <DetailPage {...props}>
                <AdvancedSearch />
              </DetailPage>
            )}
          />
          <Route
            exact
            path="/detail/aboutme"
            render={props => (
              <DetailPage {...props}>
                <AboutMe />
              </DetailPage>
            )}
          />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
