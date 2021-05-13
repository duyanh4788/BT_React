import React, { Component } from "react";

export class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor-child");
  }
  static getDerivedStateFromProps(newProps, currenStats) {
    console.log("getDerivedStateFromProps-Child");
    return null;
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate-child");
    console.log(
      "new Props",
      newProps.product.name,
      "this.props",
      this.props.product.name
    );
    //(!_.isEqual(newProps.product, this.props.product))
    if (newProps.product.name !== this.props.product.name) {
      return true;
    }
    if (newProps.number !== this.props.number) {
      return true;
    }
    return false;
  }
  render() {
    console.log("render-Child");
    return (
      <div>
        {" "}
        <h1>New ProDuct Child : {this.props.product.name}</h1>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <a className="navbar-brand" href="123">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="123">
                  Home {this.props.number}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="123">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="123"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="123">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="123">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate-child");
  }
  componentDidMount() {
    console.log("componentDidMount-child");
    // this.apiTest = setInterval(() => {

    // }, 1000);
  }
  componentWillUnmount() {
    // clearInterval(this.apiTest);
    console.log("componentWillUnmount-child");
  }
}

export default ChildComponent;
