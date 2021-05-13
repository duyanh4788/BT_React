import React, { Component } from "react";

export class XucXac extends Component {
  rederXucXac = () => {
    const { state } = this.props;
    return state.xucXac.map((xucxac, index) => {
      return (
        <img
          key={index}
          src={xucxac.imgXucXac}
          alt={xucxac.imgXucXac}
          width={50}
        />
      );
    });
  };
  render() {
    return (
      <div className="col-4 imgXucXac">
        {this.rederXucXac()}
      </div>
    );
  }
}

export default XucXac;
