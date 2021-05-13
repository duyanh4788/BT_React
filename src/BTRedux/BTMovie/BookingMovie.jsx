import React, { Component } from 'react';
import './css/BaiTapBookingTicket.css';
import DanhSachHangGhe from './DanhSachHangGhe';
import ThongTinDatGhe from './ThongTinDatGhe';
import { connect } from 'react-redux';

class BookingMovie extends Component {
  renderListHangGhe = () => {
    const { dataHangGhe } = this.props;
    return dataHangGhe.map((listHangGhe, index) => {
      return (
        <div className='listHangGhe' key={index}>
          <DanhSachHangGhe listHangGhe={listHangGhe} soHangGhe={index} />
        </div>
      )
    })
  }
  render() {
    return (
      <div className='bookingMovie'>
        <div className='bgbookMovie'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-7">
                <h1 className='textIntro'>Đặt Vé Xem Phim</h1>
                <h3 className='text'>Màn Hình</h3>
                <div className='screen'></div>
                {this.renderListHangGhe()}
              </div>
              <div className="col-5">
                <h1 className='textIntro'>Danh Sách Ghế</h1>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataHangGhe: state.BookVeReducers.dataHangGhe
  }
}
export default connect(mapStateToProps, null)(BookingMovie)
