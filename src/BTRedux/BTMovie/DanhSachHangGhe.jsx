import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookPhim_Action } from '../../redux/action/BookVe_Action'


class DanhSachHangGhe extends Component {
    renderHangGhe = () => {
        // detrusturing
        const { listHangGhe, soHangGhe, danhSachDatGhe, bookPhim } = this.props;
        // duyệt mảng danhsachghe lấy ra số ghế
        return listHangGhe.danhSachGhe.map((item, index) => {
            // tạo biến gán css
            let gheDuocChon = '';
            // tạo biến disable
            let disabled = false
            // số chỉ mục = 0 => hang=0
            if (soHangGhe === 0) {
                return (
                    <button key={index} className='rowNumber'>{item.soGhe}</button>
                )
            } else if (item.daDat) {
                gheDuocChon = 'gheDuocChon';
                disabled = true
            }
            let gheDangChon = ''
            let indexdanhSachGheDaDat = danhSachDatGhe.findIndex(gheDangDat => gheDangDat.soGhe === item.soGhe)
            if (indexdanhSachGheDaDat !== -1) {
                gheDangChon = 'gheDangChon'
            }
            return (
                <button disabled={disabled} key={index} className={`ghe ${gheDuocChon} ${gheDangChon}`}
                    onClick={() => bookPhim(item)} >{item.soGhe}</button>
            )
        })
    }
    render() {
        const { listHangGhe } = this.props;
        return (
            <div className='row'>
                <div className="col-1 hangGhe">
                    {listHangGhe.hang}
                </div>
                <div className="col-11 soGhe text-left">
                    {this.renderHangGhe()}
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
        bookPhim: (ghe) => {
            dispatch(bookPhim_Action(ghe))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachHangGhe)
