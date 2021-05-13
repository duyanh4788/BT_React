import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { UserSignUpServices } from "../Services/UserServices";
import { signUserValid } from "../Services/Validation";
import { Container, withStyles, Typography, Button } from "@material-ui/core";
import { styled } from "./styles.screens";

class SignInScreen extends Component {
  handleSubmit = (values) => {
    UserSignUpServices.signUpForm(values)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" className={classes.tagIntro}>
          Form Register
        </Typography>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "GP01",
            email: "",
          }}
          validationSchema={signUserValid}
          onSubmit={this.handleSubmit}
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
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className={classes.errorMessage}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mật Khẩu</label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={handleChange}
                />
                <ErrorMessage name="matKhau">
                  {(msg) => <div className={classes.errorMessage}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Họ Tên</label>
                <Field
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={handleChange}
                />
                <ErrorMessage name="hoTen">
                  {(msg) => <div className={classes.errorMessage}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Số Điện Thoại</label>
                <Field
                  type="number"
                  className="form-control"
                  name="soDT"
                  onChange={handleChange}
                />
                <ErrorMessage name="soDT">
                  {(msg) => <div className={classes.errorMessage}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Email</label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                />
                <ErrorMessage name="email">
                  {(msg) => <div className={classes.errorMessage}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mã Nhóm</label>
                <Field
                  component="select"
                  className="form-control"
                  name="maNhom"
                  onChange={handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
                <ErrorMessage name="maNhom">
                  {(msg) => <div className={classes.errorMessage}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}

export default withStyles(styled)(SignInScreen);
