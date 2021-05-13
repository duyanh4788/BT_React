import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Container, withStyles, Typography, Button } from "@material-ui/core";
import { styled } from "./styles.screens";
import { connect } from "react-redux";
import { getAPILogIn_Action } from "../Services/Axios_Action";

class SignupScreen extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" className={classes.tagIntro}>
          Log In
        </Typography>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
          }}
          onSubmit={(values) => {
            this.props.dispatch(getAPILogIn_Action(values));
          }}
        >
          {({ handleChange }) => (
            <Form>
              <div className="form-group">
                <label>Tài Khoản</label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mật Khẩu</label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}

export default connect()(withStyles(styled)(SignupScreen));
