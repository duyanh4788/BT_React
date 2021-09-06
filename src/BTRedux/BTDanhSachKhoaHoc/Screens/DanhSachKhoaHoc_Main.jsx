import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import CourseItem from "./CourseItem";
import Detailitem from "../Layout/Detailitem";
import SignInScreen from "./SignInScreen";
import LogInScreen from "./LogInScreen";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";

import { connect } from 'react-redux';
import { logIn_Action } from "../../../redux/action/DanhSachKhoaHoc_Action";

class DanhSachKhoaHoc extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Fragment>
              <Container maxWidth="lg">
                <Route path="/" exact component={CourseItem} />
                <Route path="/detail/:courseId" exact component={Detailitem} />
                <Route path="/signin" exact component={SignInScreen} />
                <Route path="/login" exact component={LogInScreen} />
              </Container>
            </Fragment>
          </Switch>
        </BrowserRouter>
        <Container>
          <CourseItem />
        </Container>
      </>
    );
  }
  _getCredentialFromLocal = () => {
    const credentialSStr = localStorage.getItem('Credentials')
    if (credentialSStr) {
      this.props.dispatch(logIn_Action(JSON.parse(credentialSStr)))
    }
  }
  componentDidMount() {
    this._getCredentialFromLocal()
  }
}

export default connect()(DanhSachKhoaHoc);
