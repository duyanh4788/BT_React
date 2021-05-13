import React, { Component } from "react";
import { connect } from "react-redux";

class ProducList_P2 extends Component {
  renderProduct = () => {
    const { gioHang, themGioHang, detailGioHang } = this.props;
    return gioHang.map((item, index) => {
      return (
        <div className="card text-white bg-primary mx-auto" key={index}>
          <img src={item.hinhAnh} alt={item.hinhAnh} height={300} />
          <div className="card-body text-left font-weight-bold">
            <h4 className="card-title">Model : {item.tenSP}</h4>
            <p className="card-text">Giá : {item.gia.toLocaleString()}</p>
            <button
              className="btn btn-outline-success"
              onClick={() => detailGioHang(item)}
            >
              Detail
            </button>
            <button
              className="btn btn-outline-danger ml-2"
              onClick={() => themGioHang(item)}
            >
              Cart
            </button>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="row mx-auto">{this.renderProduct()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHan2Reducers.dataPhone,
  };
};
const mapDispacthToPros = (dispacth) => {
  return {
    themGioHang: (sanPham) => {
      const spGiohang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        hinhAnh: sanPham.hinhAnh,
        gia: sanPham.gia,
        soLuong: 1,
      };
      const action = {
        type: "THEM_GH",
        spGiohang,
      };
      dispacth(action);
    },
    detailGioHang: (sanPham) => {
      const action = {
        type: "DETAIL_2",
        sanPham,
      };
      dispacth(action);
    },
  };
};
export default connect(mapStateToProps, mapDispacthToPros)(ProducList_P2);
