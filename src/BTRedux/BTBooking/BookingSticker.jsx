import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMovie_Action } from "../../redux/action/BookingMovie_Action";

class BookingSticker extends Component {
  renderTicker = () => {
    const { danhSachGheDaDat, deleteSticker } = this.props;
    return danhSachGheDaDat.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.soGhe}</td>
          <td>{item.gia.toLocaleString()}</td>
          <td>
            <span className="btn" onClick={() => deleteSticker(item.soGhe)}>
              <i className="fas fa-trash"></i>
            </span>
          </td>
        </tr>
      );
    });
  };
  renderTable = () => {
    const { danhSachGheDaDat } = this.props;
    return (
      <div className="scrollbar" id="style-1">
        <div className="force-overflow">
          <table className="table">
            <thead>
              <tr>
                <th>Number Chair</th>
                <th>Prices Chair</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{this.renderTicker()}</tbody>
            <tbody>
              <tr>
                <td colSpan="3">
                  Tổng Tiền :{" "}
                  <span className="text-success">
                    {danhSachGheDaDat
                      .reduce((tong, item) => {
                        return (tong += item.gia);
                      }, 0)
                      .toLocaleString()}{" "}
                    VND
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="col-5">
        <h1 className="textIntro">List Chair Oder</h1>
        <div className="divListBtn">
          <div className="listBtn">
            <button className="gheDaDat"></button>
            <span className="textGhe"> Ghế Đã Đặt</span>
          </div>
          <div className="listBtn">
            <button className="gheDangDat"></button>
            <span className="textGhe"> Ghế Đang Đặt</span>
          </div>
          <div className="listBtn">
            <button className="gheChuaDat"></button>
            <span className="textGhe"> Ghế Chưa Đặt</span>
          </div>
        </div>
        {this.renderTable()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDaDat: state.BookingMovieReducers.danhSachGheDaDat,
  };
};
const mapDispatchToProps = (dispacth) => {
  return {
    deleteSticker: (soGhe) => {
      dispacth(deleteMovie_Action(soGhe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookingSticker);
