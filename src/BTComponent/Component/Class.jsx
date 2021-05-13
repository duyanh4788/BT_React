import React, { Component } from "react";

export default class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/v1.png",
      model: "GUCI",
      price: 100,
    };
  }
  renderClass = (clas) => {
    let imgS = "";
    let modelS = "";
    let priceS = "";
    switch (clas) {
      case "v1":
        {
          imgS = "./img/v1.png";
          modelS = "GUCI 1";
          priceS = 100;
        }
        break;
      case "v2":
        {
          imgS = "./img/v2.png";
          modelS = "CHANEL 1";
          priceS = 200;
        }
        break;
      case "v3":
        {
          imgS = "./img/v3.png";
          modelS = "DELL 1";
          priceS = 300;
        }
        break;
      case "v4":
        {
          imgS = "./img/v4.png";
          modelS = "HP 1";
          priceS = 400;
        }
        break;
      case "v5":
        {
          imgS = "./img/v5.png";
          modelS = "APPLE 1";
          priceS = 500;
        }
        break;
      case "v6":
        {
          imgS = "./img/v6.png";
          modelS = "LENOVO 1";
          priceS = 600;
        }
        break;
      case "v7":
        {
          imgS = "./img/v7.png";
          modelS = "ASUS 1";
          priceS = 700;
        }
        break;
      case "v8":
        {
          imgS = "./img/v8.png";
          modelS = "ACER 1";
          priceS = 800;
        }
        break;
      case "v9":
        {
          imgS = "./img/v9.png";
          modelS = "VIN 1";
          priceS = 900;
        }
        break;
      default:
        break;
    }
    this.setState({
      img: imgS,
      model: modelS,
      price: priceS,
    });
  };

  render() {
    return (
      <div className="container bg-dark py-5">
        <h1 className="text-white">Demo Class</h1>
        <div className="row py-2">
          <div className="col-4 classModel bg-light rounded">
            <div className="img">
              <img src="./img/model.jpg" width={300} />
              <img className="classtest" src={this.state.img} width={150} />
            </div>
            <div className="p-5 text-left">
              <span className="rounded bg-danger px-3 py-2 text-white font-weight-bold">
                {this.state.price} $
              </span>
              <p className="mt-2">{this.state.model}</p>
            </div>
          </div>
          <div className="col-8">
            <div className="colOne py-5">
              <button
                className="btn border"
                onClick={() => this.renderClass("v1")}
              >
                <img src="./img/v1.png" width={100} />
              </button>
              <button
                className="btn border mx-1"
                onClick={() => this.renderClass("v2")}
              >
                <img src="./img/v2.png" width={100} />
              </button>
              <button
                className="btn border"
                onClick={() => this.renderClass("v3")}
              >
                <img src="./img/v3.png" width={100} />
              </button>
              <button
                className="btn border ml-1"
                onClick={() => this.renderClass("v4")}
              >
                <img src="./img/v4.png" width={100} />
              </button>
            </div>
            <div className="colTwo pt-5">
              <button
                className="btn border"
                onClick={() => this.renderClass("v5")}
              >
                <img src="./img/v5.png" width={100} />
              </button>
              <button
                className="btn border mx-1"
                onClick={() => this.renderClass("v6")}
              >
                <img src="./img/v6.png" width={100} />
              </button>
              <button
                className="btn border"
                onClick={() => this.renderClass("v7")}
              >
                <img src="./img/v7.png" width={100} />
              </button>
              <button
                className="btn border ml-1"
                onClick={() => this.renderClass("v8")}
              >
                <img src="./img/v8.png" width={100} />
              </button>
              <button
                className="btn border ml-1"
                onClick={() => this.renderClass("v9")}
              >
                <img src="./img/v9.png" width={100} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
