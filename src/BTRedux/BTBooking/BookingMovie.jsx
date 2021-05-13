import React, { Component } from "react";
import BookingSticker from "./BookingSticker";
import "./css/BaiTapBookingTicket.css";
import { connect } from "react-redux";
import BookeChair from "./BookingChair";

class BookingMovie extends Component {
  renderChair = () => {
    const { danhSachGhe } = this.props;
    return danhSachGhe.map((ghe, index) => {
      return (
        <div key={index}>
          <BookeChair ghe={ghe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="bookingMovie">
        <div className="container-fluid">
          <div className="row">
            <div className="col-7">
              <h1 className="textIntro">Booking Sticker Flim</h1>
              <h4 className="textMonitor">Monitor</h4>
              <div className="screen"></div>
              {this.renderChair()}
            </div>
            <BookingSticker />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.BookingMovieReducers.danhSachGhe,
  };
};
export default connect(mapStateToProps, null)(BookingMovie);
