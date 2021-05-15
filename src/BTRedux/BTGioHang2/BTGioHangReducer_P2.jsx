import React, { Component } from "react";
import ProducList_P2 from "./ProducList_P2";
import GioHang_P2 from "./GioHang_P2";
import ProductItem_P2 from "./ProductItem_P2";
import { connect } from "react-redux";

class BTGioHangReducer_P2 extends Component {
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
        <ProducList_P2 />
        <ProductItem_P2 />
        <GioHang_P2 />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHan2Reducers.gioHangModal,
  };
};
export default connect(mapStateToProps, null)(BTGioHangReducer_P2);
