import React, { Component } from "react";
import { connect } from "react-redux";

export class GioHangPhone extends Component {
  renderGioHang = () => {
    const { gioHang, xoaGioHang, upDown } = this.props;
    return gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td className='text-dark'>{item.maSP}</td>
          <td className='text-dark'>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} alt={item.hinhAnh} width={100} />
          </td>
          <td className='text-dark'>{item.gia.toLocaleString()}</td>
          <td>
            <button
              className="btn border"
              onClick={() => upDown(item.maSP, false)}
            >
              -
            </button>
            {item.soLuong}
            <button
              className="btn border"
              onClick={() => upDown(item.maSP, true)}
            >
              +
            </button>
          </td>
          <td className='text-dark'>{(item.gia * item.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => xoaGioHang(index)}
            >
              delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    const { gioHang } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ width: "900px" }}>
            <div className="modal-header">
              <h5 className="modal-title">Giỏ Hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã Sản Phẩm</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Thành Tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderGioHang()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5"></td>
                    <td className='text-dark'>Tổng Tiền</td>
                    <td className='text-dark'>
                      {gioHang
                        .reduce((tong, item) => {
                          return (tong += item.soLuong * item.gia);
                        }, 0)
                        .toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHan2Reducers.gioHangModal,
  };
};
const mapDispacthToPros = (dispacth) => {
  return {
    xoaGioHang: (index) => {
      const action = {
        type: "XOA_GH",
        index,
      };
      dispacth(action);
    },
    upDown: (maSP, uD) => {
      const action = {
        type: "UD_GIOHANG",
        maSP,
        uD,
      };
      dispacth(action);
    },
  };
};
export default connect(mapStateToProps, mapDispacthToPros)(GioHangPhone);
