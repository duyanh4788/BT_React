import React, { Component } from "react";
import { connect } from "react-redux";

export class XucXac extends Component {
  renderXucXac = () => {
    const { xucXac } = this.props;
    return xucXac.map((item, index) => {
      return (
        <img
          key={index}
          className="imgXucXac"
          src={item.imgXucXac}
          alt={item.imgXucXac}
          width={50}
        />
      );
    });
  };
  render() {
    return <div className="col-4">{this.renderXucXac()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    xucXac: state.AppXucXacReducers.dataXucXac.xucXac,
  };
};
export default connect(mapStateToProps, null)(XucXac);
