import React, { Component } from 'react'

export class KetQua extends Component {
  render() {
    const { soBanThang, soBanChoi, taiXiu } = this.props;
    return (
      <div className='ketQua'>
        <p className='textGameLabel'>Bạn Chọn : <span className='text-danger'>{taiXiu ? "Tài" : "Xỉu"}</span></p>
        <p className='textGameLabel'>Số Bàn Thắng : <span className='text-warning'>{soBanThang}</span></p>
        <p className='textGameLabel'>Số Bàn Chơi : <span className='text-info'>{soBanChoi}</span></p>
      </div>
    )
  }
}

export default KetQua
