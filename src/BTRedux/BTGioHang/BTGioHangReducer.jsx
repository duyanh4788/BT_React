import React, { Component } from 'react';
import DanhSachGioHang from './DanhSachGioHang'
import ModalGioHang from './ModalGioHang'

export class BTGioHangReducer extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Bài Tập Giỏ Hàng</h1>
        <DanhSachGioHang />
        <h1>Danh Sách Giỏ Hàng</h1>
        <ModalGioHang />
      </div>
    )
  }
}

export default BTGioHangReducer
