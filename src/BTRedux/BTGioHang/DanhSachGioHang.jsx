import React, { Component } from 'react';
import dataPhone from '../../data/Phonedata.json';
import { connect } from 'react-redux';

export class DanhSachGioHang extends Component {
  rederSanPham = () => {
    const { addCart } = this.props;
    return dataPhone.map((item, index) => {
      return (
        <div className="card text-white bg-primary col-4" key={index}>
          <img className="card-img-top" src={item.hinhAnh} alt={item.hinhAnh} height={350} />
          <div className="card-body text-left">
            <h4 className="card-title">Model : {item.tenSP}</h4>
            <p className="card-text">Giá : {item.gia.toLocaleString()}</p>
            <button className="btn btn-success" onClick={() => addCart(item)}>Cart</button>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="row">
        {this.rederSanPham()}
      </div>
    )
  }
}
const mapDispacthToProps = (dispatch) => {
  return {
    addCart: (sanPham) => {
      const gioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        hinhAnh: sanPham.hinhAnh,
        gia: sanPham.gia,
        soLuong: sanPham.soLuong,
      }
      const action = {
        type: "ADD_CART",
        gioHang,
      }
      dispatch(action)
    }
  }
}
export default connect(null, mapDispacthToProps)(DanhSachGioHang)
