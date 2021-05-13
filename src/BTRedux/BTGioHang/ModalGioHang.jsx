import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalGioHang extends Component {
  renderGioHang = () => {
    const { gioHang, deleteMSP, upDown, deleteID } = this.props;
    return gioHang.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>
            <img src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={50} />
          </td>
          <td>{sanPham.gia.toLocaleString()}</td>
          <td>
            <button className='btn border mr-1' onClick={() => upDown(sanPham.maSP, false)}>-</button>
            {sanPham.soLuong}
            <button className='btn border ml-1' onClick={() => upDown(sanPham.maSP, true)}>+</button>
          </td>
          <td>{(sanPham.soLuong * sanPham.gia).toLocaleString()}</td>
          <td>
            <button className='btn btn-info ml-1' onClick={() => deleteMSP(sanPham.maSP)}>delete-MSP</button>
            <button className='btn btn-danger ml-1' onClick={() => deleteID(index)}>delete-ID</button>
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <table className="table my-5">
        <thead>
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Hình Ảnh</th>
            <th>Giá Tiền</th>
            <th>Số Lượng</th>
            <th>Thành Tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.renderGioHang()}
        </tbody>
      </table>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangReducers.gioHang
  }
}
const mapDispacthToProps = (dispacth) => {
  return {
    deleteMSP: (maSP) => {
      const action = {
        type: "DELL_MSP",
        maSP,
      }
      dispacth(action)
    },
    deleteID: (index) => {
      const action = {
        type: "DELL_ID",
        index,
      }
      dispacth(action)
    },
    upDown: (maSP, uD) => {
      const action = {
        type: "UP_DOWN",
        maSP,
        uD,
      }
      dispacth(action)
    }
  }
}
export default connect(mapStateToProps, mapDispacthToProps)(ModalGioHang)
