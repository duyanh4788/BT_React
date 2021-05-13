import React, { Component } from "react";
import Mouting from "./Mouting";
import Unmouting from "./Unmouting";
import Updating from "./Updating";
class LifeCycLe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onOff: false,
      xoa: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Demo</h1>
        <button
          onClick={() => {
            this.setState({
              onOff: !this.state.onOff,
            });
          }}
        >
          on off
        </button>
        {this.state.onOff ? <Mouting /> : ""}
        <Updating />
        <button
          onClick={() => {
            this.setState({
              xoa: true,
            });
          }}
        >
          xóa unmounting
        </button>
        {this.state.xoa ? "" : <Unmouting />}
      </div>
    );
  }
}

export default LifeCycLe;
