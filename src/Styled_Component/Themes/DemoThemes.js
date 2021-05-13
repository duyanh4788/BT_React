import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

const ConfigDarkThemes = {
  background: "#000",
  color: "#fff",
  fontSize: "30px",
  fontWeight: "bold",
};
const ConfigLightThemes = {
  background: "#6633ff",
  color: "#fff",
  fontSize: "30px",
  fontWeight: "300",
};
class DemoThemes extends Component {
  state = {
    defaultThemes: ConfigDarkThemes,
  };
  handleChangeThemes = (e) => {
    console.log(e);
    this.setState({
      defaultThemes:
        e.target.value === "1" ? ConfigDarkThemes : ConfigLightThemes,
    });
  };
  render() {
    const DivStyle = styled.div`
      color: ${(props) => props.theme.color};
      padding: 5%;
      background-color: ${(props) => props.theme.background};
      font-size: ${(props) => props.theme.fontSize};
      font-weight: ${(props) => props.theme.fontWeight};
    `;
    return (
      <ThemeProvider theme={this.state.defaultThemes}>
        <DivStyle>123</DivStyle>
        <select onChange={this.handleChangeThemes}>
          <option value="1">Dark Theme</option>
          <option value="2">Light Theme</option>
        </select>
      </ThemeProvider>
    );
  }
}

export default DemoThemes;
