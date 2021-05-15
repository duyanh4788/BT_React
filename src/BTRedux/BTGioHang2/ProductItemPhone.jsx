import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItemPhone extends Component {
  render() {
    const {
      maSP,
      tenSP,
      manHinh,
      hdh,
      camT,
      camS,
      ram,
      rom,
      hinhAnh,
    } = this.props.gioHang;
    return (
      <div className="techSpech">
        <h1 className="my-3">Thông Số Kĩ Thuật</h1>
        <div className="row">
          <div className="col-5">
            <img src={hinhAnh} alt={hinhAnh} width={300} />
          </div>
          <div className="col-7">
            <table className="table text-left">
              <thead>
                <tr>
                  <td>Mã Sản Phẩm</td>
                  <td>{maSP}</td>
                </tr>
                <tr>
                  <td>Tên Sản Phẩm</td>
                  <td>{tenSP}</td>
                </tr>
                <tr>
                  <td>Màn Hình</td>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ Điều Hành</td>
                  <td>{hdh}</td>
                </tr>
                <tr>
                  <td>Cam Trước</td>
                  <td>{camT}</td>
                </tr>
                <tr>
                  <td>Cam Sau</td>
                  <td>{camS}</td>
                </tr>
                <tr>
                  <td>Rom</td>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHan2Reducers.techSpech,
  };
};
export default connect(mapStateToProps, null)(ProductItemPhone);
