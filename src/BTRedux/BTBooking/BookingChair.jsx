import React, { Component } from "react";
import { connect } from "react-redux";
import { BookingMovie_Action } from "../../redux/action/BookingMovie_Action";

class BookeChair extends Component {
  renderListChair = () => {
    const { ghe, soHangGhe, danhSachGheDaDat, bookGhe } = this.props;
    return ghe.danhSachGhe.map((item, index) => {
      let cssGheDaDat = "";
      let disable = false;
      if (soHangGhe === 0) {
        return (
          <button key={index} className="rowNumber">
            {item.soGhe}
          </button>
        );
      } else if (item.daDat) {
        cssGheDaDat = "gheDaDat";
        disable = true;
      }
      let cssGheDangDat = "";
      let indexDanhSachGheDaDat = danhSachGheDaDat.findIndex(
        (ghe) => ghe.soGhe === item.soGhe
      );
      if (indexDanhSachGheDaDat !== -1) {
        cssGheDangDat = "gheDangDat";
      }
      return (
        <button
          key={index}
          disabled={disable}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          onClick={() => bookGhe(item)}
        >
          {item.soGhe}
        </button>
      );
    });
  };
  render() {
    const { ghe } = this.props;
    return (
      <div className="listGhe">
        <div className="row">
          <div className="col-1 textSoHangGhe">{ghe.hang}</div>
          <div className="col-11 listHangGhe">{this.renderListChair()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDaDat: state.BookingMovieReducers.danhSachGheDaDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    bookGhe: (ghe) => {
      dispatch(BookingMovie_Action(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookeChair);
