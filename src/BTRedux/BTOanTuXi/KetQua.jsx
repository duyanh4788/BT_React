import React, { Component } from 'react';
import { connect } from 'react-redux';

class KetQua extends Component {
    render() {
        const { ketQua, soBanThang, soBanChoi } = this.props;
        return (
            <div className="col-4">
                <p className="text textTilte">Kết Quả : <span className="ketQua">{ketQua}</span></p>
                <p className="text textTilte">Số Bàn Thắng : <span className="ketQua">{soBanThang}</span></p>
                <p className="text textTilte">Số Bàn Chơi : <span className="ketQua">{soBanChoi}</span></p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ketQua: state.OanTuXiReducers.ketQua,
        soBanThang: state.OanTuXiReducers.soBanThang,
        soBanChoi: state.OanTuXiReducers.soBanChoi,
    }
}
export default connect(mapStateToProps, null)(KetQua)
