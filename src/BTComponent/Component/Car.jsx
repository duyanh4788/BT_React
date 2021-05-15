import React, { Component } from "react";

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/black-car.jpg",
    };
  }
  renderXe = (color) => {
    let imgSource = "";
    switch (color) {
      case "black":
        imgSource = "./img/black-car.jpg";
        break;
      case "red":
        imgSource = "./img/red-car.jpg";
        break;
      case "gray":
        imgSource = "./img/silver-car.jpg";
        break;
      case "silver":
        imgSource = "./img/steel-car.jpg";
        break;
      default:
        break;
    }
    this.setState({
      img: imgSource,
    });
  };

  render() {
    const borDer1 = {
      borderRadius: "50%",
      backgroundColor: "black",
      color: "black",
    };
    const borDer2 = {
      borderRadius: "50%",
      backgroundColor: "red",
      color: "red",
    };
    const borDer3 = {
      borderRadius: "50%",
      backgroundColor: "gray",
      color: "gray",
    };
    const borDer4 = {
      borderRadius: "50%",
      backgroundColor: "#381e1e",
      color: "#381e1e",
    };
    return (
      <div className="container">
        <h1 className="text-center my-5">Bài Tập Chọn Màu Xe</h1>
        <div className="row">
          <div className="col-3">
            <button className="btn" onClick={() => this.renderXe("black")}>
              <i className="iCon far fa-circle" style={borDer1}></i>
            </button>
          </div>
          <div className="col-3">
            <button className="btn" onClick={() => this.renderXe("red")}>
              <i className="iCon far fa-circle" style={borDer2}></i>
            </button>
          </div>
          <div className="col-3">
            <button className="btn" onClick={() => this.renderXe("gray")}>
              <i className="iCon far fa-circle" style={borDer3}></i>
            </button>
          </div>
          <div className="col-3">
            <button className="btn" onClick={() => this.renderXe("silver")}>
              <i className="iCon far fa-circle " style={borDer4}></i>
            </button>
          </div>
        </div>
        <div className="my-3">
          <img src={this.state.img} alt={this.state.img} width={1000} />
        </div>
      </div>
    );
  }
}
