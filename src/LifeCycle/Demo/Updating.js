import React, { Component } from "react";

class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 1,
      status: true,
    };
    console.log("constructor-updating");
  }
  componentWillReceiveProps(newsProps) {
    console.log("componentWillReceiveProps-updating"); // react js < 16.0
  }
  shouldComponentUpdate(newsProps, newsState) {
    console.log("shouldComponentUpdate-updating");
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate-updating");
  }
  render() {
    console.log("render-updating");
    return (
      <div>
        <h1>Tuổi : {this.state.age}</h1>
        <button
          onClick={() => {
            this.setState({
              age: this.state.age + 1,
            });
          }}
        >
          +
        </button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // chạy sau render và setState
    // dùng để gọi lại state và props cũ , thường dùng để setState (có điều kiện) và call API ,setInterVal , setTimeout
    // vấn đề lỗi : bị lặp vô tận khi ( setState => render => componentDidupdate => this.setState => render => {...componentDidUpdate})
    console.log("prevState", prevState);
    console.log("this.state", this.state);
    console.log("componentDidUpdate-updating");
    if (prevState.status !== this.state.status) {
      this.setState({
        age: 10,
        status: false,
      });
    }
  }
}

export default Updating;
