import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import AboutNL from "./AboutNL";
import ContactNL from "./ContactNL";
import HomeNL from "./HomeNL";
import LoginNL from "./LoginNL";
import Navbar from "./Navbar";
import Profile from "./Profile";

class HeaderNL extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/homenl" exact component={HomeNL} />
            <Route path="/about" exact component={AboutNL} />
            <Route path="/contact" exact component={ContactNL} />
            <Route path="/login" exact component={LoginNL} />
            <Route path="/profile" exact component={Profile} />
            <Route path="*" exact component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default HeaderNL;
