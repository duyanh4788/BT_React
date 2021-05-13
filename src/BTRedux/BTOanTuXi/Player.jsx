import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Player extends Component {
    renderOTX = () => {
        const { player, btnOTX } = this.props;
        return player.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
                border = { border: "2px solid #45d994" }
            }
            return (
                <button style={border} key={index} onClick={() => btnOTX(item.ma)}>
                    <img src={item.imgOTX} alt={item.imgOTX} width={50} />
                </button>
            )
        })
    }
    render() {
        const { player } = this.props;
        return (
            <div className="col-4">
                <div className="theThink">
                    <img src={player.find(item => item.datCuoc === true).imgOTX}
                        alt={player.find(item => item.datCuoc === true).imgOTX} width={120} />
                </div>
                <div className="speech-bubble"></div>
                <img src="./img/gameOnTuTI/player.png" alt="" width={200} />
                <div className="btnOTX">
                    {this.renderOTX()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        player: state.OanTuXiReducers.player,
    }
}
const mapDispachtToProps = dispatch => {
    return {
        btnOTX: (maCuoc) => {
            const action = {
                type: "OAN_TU_xI",
                maCuoc,
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispachtToProps)(Player)
