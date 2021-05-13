import React, { Component } from "react";

export class GioHang extends Component {
  renderCart = () => {
    const { listPhone, xoaGioHang, tangGiamSanPham } = this.props;
    return listPhone.map((phone, index) => {
      return (
        <tr key={index}>
          <td>{phone.maSP}</td>
          <td>{phone.tenSP}</td>
          <td>
            <img src={phone.hinhAnh} alt="" width={100} />
          </td>
          <td>
            <div className="border rounded">
              <button
                className="btn border-right mr-2"
                onClick={() => tangGiamSanPham(phone.maSP, false)}
              >
                -
              </button>
              {phone.soLuong}
              <button
                className="btn border-left ml-2"
                onClick={() => tangGiamSanPham(phone.maSP, true)}
              >
                +
              </button>
            </div>
          </td>
          <td>{phone.gia.toLocaleString()}</td>
          <td>{(phone.soLuong * phone.gia).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => xoaGioHang(phone.maSP)}
            >
              delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
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
                    <th>Số Lượng</th>
                    <th>Đơn Giá</th>
                    <th>Thành Tiền</th>
                    <th>
                      <i className="fas fa-cog"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
                <tbody>
                  <tr>
                    <td colSpan="5"></td>
                    <td>Tổng Tiền : </td>
                    <td>
                      {this.props.listPhone
                        .reduce((tong, item, index) => {
                          return (tong += item.soLuong * item.gia);
                        }, 0)
                        .toLocaleString()}
                    </td>
                  </tr>
                </tbody>
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

export default GioHang;
