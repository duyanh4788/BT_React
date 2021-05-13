import React, { Component } from 'react';
import XucXac from './XucXac';
import { connect } from 'react-redux'

export class TaiXiu extends Component {
    render() {
        const { btnTaiXiu } = this.props;
        return (
            <div className="row">
                <div className="col-4">
                    <button className="btnTai" onClick={() => btnTaiXiu(true)}>Tài</button>
                </div>
                <XucXac />
                <div className="col-4">
                    <button className="btnXiu" onClick={() => btnTaiXiu(false)}>Xỉu</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        btnTaiXiu: (taixiu) => {
            const action = {
                type: "BTN_TX",
                taixiu,
            }
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(TaiXiu)