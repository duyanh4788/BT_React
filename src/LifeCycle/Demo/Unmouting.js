import React, { Component } from "react";

class Unmouting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giay: 0,
    };
  }
  render() {
    console.log("render-unmouting");
    return <div>count {this.state.giay}</div>;
  }
  componentDidMount() {
    this.counter = setInterval(() => {
      this.setState({
        giay: this.state.giay + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    // chạy khi component bị xóa bỏ khỏi dom reactJs
    // dùng để dọn dẹp các hàm còn tồn đọng
    console.log("componentWillUnmount");
    clearInterval(this.counter);
  }
}

export default Unmouting;
