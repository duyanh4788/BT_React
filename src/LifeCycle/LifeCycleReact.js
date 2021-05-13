import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export class LifeCycleReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      product: {
        id: 1,
        name: "iphone",
      },
    };
    console.log("constructor-main");
  }
  // được gọi khi component render ra giao diện app return state props cũ hoặc state props mới
  static getDerivedStateFromProps(newProps, currenStats) {
    console.log("getDerivedStateFromProps-main");
    return null;
  }
  // được gọi khi setState hoặc props
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate-main");
    // trả về true thi chạy tiếp các life Cylce phía dưới nếu false sẽ dừng lại
    return true;
  }
  render() {
    console.log("render-Main");
    return (
      <div>
        <h1>Test LifeCycle</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            let newProDuct = { ...this.state.product };
            newProDuct.name = "samsung";
            this.setState({
              product: newProDuct,
            });
          }}
        >
          Change ProDuct
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          + number
        </button>
        <h1>New ProDuct Main : {this.state.product.name}</h1>
        <ChildComponent
          product={this.state.product}
          number={this.state.number}
        />
      </div>
    );
  }
  /**
   * chỉ chạy khi được setState hoặc props (*) khi setState phải  có điều kiện
   *  */
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate-main");
  }
  // được gọi 1 lần duy nhất sau hàm render ( trạng thái mouting) dùng để gọi ajax api
  componentDidMount() {
    console.log("componentDidMount-main");
  }
  // được gọi khi remove 1 component và đc chạy trước khi component bị remove
  componentWillUnmount() {
    console.log("componentWillMount-main");
  }
}

export default LifeCycleReact;
