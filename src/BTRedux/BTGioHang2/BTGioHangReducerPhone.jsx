import React, { Component } from "react";
import ProducListPhone from "./ProducListPhone";
import ProductItemPhone from "./ProductItemPhone";
import GioHangPhone from "./GioHangPhone";
import { connect } from "react-redux";

class BTGioHangReducerPhone extends Component {
  renderSoLuong = () => {
    const { gioHang } = this.props;
    let tongSL = gioHang.reduce((tong, item) => {
      return (tong += item.soLuong);
    }, 0);
    return tongSL;
  };
  render() {
    return (
      <div className="container text-center text-dark">
        <h1 className="text-primary mt-5">Bài Tập Giỏ Hàng</h1>
        <span
          className="btn btn-outline-success my-3"
          data-toggle="modal"
          data-target="#modelId"
        >
          Giỏ Hàng ({this.renderSoLuong()})
        </span>
        <ProducListPhone />
        <ProductItemPhone />
        <GioHangPhone />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHan2Reducers.gioHangModal,
  };
};
export default connect(mapStateToProps, null)(BTGioHangReducerPhone);
