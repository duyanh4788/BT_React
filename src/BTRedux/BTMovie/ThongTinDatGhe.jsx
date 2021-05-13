import React, { Component } from 'react';
import { connect } from 'react-redux';
import { huyPhim_Action } from '../../redux/action/BookVe_Action'

class ThongTinDatGhe extends Component {
  renderListDatGhe = () => {
    const { danhSachDatGhe, huyPhim } = this.props;
    return danhSachDatGhe.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.soGhe}</td>
          <td>{item.gia.toLocaleString()}</td>
          <td><button onClick={() => huyPhim(item.soGhe)}><i className="far fa-trash-alt"> hủy vé</i></button></td>
        </tr>
      )
    })
  }
  render() {
    const { danhSachDatGhe } = this.props
    return (
      <div className='listBookVe'>
        <div className='btnListGhe'>
          <button className='gheDuocChon'></button><span className='text'> Ghế Đã Đặt</span>
        </div>
        <div className='btnListGhe'>
          <button className='gheDangChon'></button><span className='text'> Ghế Đang Đặt</span>
        </div>
        <div className='btnListGhe'>
          <button className='gheChuaDat'></button><span className='text'> Ghế Chưa Đặt</span>
        </div>
        <div className='scrollbar' id='style-1'>
          <div className='force-overflow'>
            <table className='table rounded'>
              <thead>
                <tr>
                  <th>Số Ghế</th>
                  <th>Giá Vé</th>
                  <th>Trạng Thái</th>
                </tr>
              </thead>
              <tbody>
                {this.renderListDatGhe()}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan='3'>Tổng Tiền :
              <span> {danhSachDatGhe.reduce((tong, item) => {
                    return tong += item.gia
                  }, 0).toLocaleString()} $</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    danhSachDatGhe: state.BookVeReducers.danhSachDatGhe
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    huyPhim: (soGhe) => {
      dispatch(huyPhim_Action(soGhe))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe)
