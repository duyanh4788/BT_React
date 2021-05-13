import React, { Component } from "react";
import GioHang from "./GioHang";
import ListtechSpec from "./ListtechSpec";

export class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPhone: [],
    };
  }
  // cart
  themGioHang = (phone) => {
    let updateCart = {
      maSP: phone.maSP,
      tenSP: phone.tenSP,
      hinhAnh: phone.hinhAnh,
      soLuong: phone.soLuong,
      gia: phone.gia,
    };
    let sortListPhone = [...this.state.listPhone];
    let index = sortListPhone.findIndex((sp) => sp.maSP === updateCart.maSP);
    if (index !== -1) {
      sortListPhone[index].soLuong += 1;
    } else {
      sortListPhone.push(updateCart);
    }
    this.setState({
      listPhone: sortListPhone,
    });
  };
  // delete
  xoaGioHang = (maSP) => {
    let sortListPhone = [...this.state.listPhone];
    let index = sortListPhone.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      sortListPhone.splice(index, 1);
    }
    this.setState({
      listPhone: sortListPhone,
    });
  };
  // tăng giảm
  tangGiamSanPham = (maSP, tangGiam) => {
    let sortListPhone = [...this.state.listPhone];
    let index = sortListPhone.findIndex((sp) => sp.maSP === maSP);
    if (tangGiam === true) {
      sortListPhone[index].soLuong += 1;
    } else if (sortListPhone[index].soLuong > 1) {
      sortListPhone[index].soLuong -= 1;
    }
    this.setState({
      listPhone: sortListPhone,
    });
  };
  // render
  render() {
    const tong = this.state.listPhone.reduce((tongSL, item, index) => {
      return (tongSL += item.soLuong);
    }, 0);
    return (
      <div className="container">
        <h1>Danh Sách Điện Thoại</h1>
        <span
          className="btn btn-outline-success my-2"
          data-toggle="modal"
          data-target="#modelId"
        >
          <i className="fas fa-cart-plus"></i> Giỏ Hàng ({tong})
        </span>
        <ListtechSpec themGioHang={this.themGioHang} />
        <GioHang
          listPhone={this.state.listPhone}
          xoaGioHang={this.xoaGioHang}
          tangGiamSanPham={this.tangGiamSanPham}
        />
      </div>
    );
  }
}

export default Phone;
