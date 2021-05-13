import React, { Component } from 'react'
import { connect } from 'react-redux';

class Computer extends Component {
    render() {
        const { comPuter } = this.props;
        let keyFrame = `
        @keyframes item${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
          }
        `
        return (
            <div className="col-4 player">
                <style>{keyFrame}</style>
                <div className="theThink">
                    <img className="imgComputer" style={{ animation: `item${Date.now()} 0.5s` }} src={comPuter.imgOTX} alt={comPuter.imgOTX} width={120} />
                </div>
                <div className="speech-bubble"></div>
                <img src="./img/gameOnTuTI/playerComputer.png" alt="" width={200} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        comPuter: state.OanTuXiReducers.comPuter,
    }
}
export default connect(mapStateToProps, null)(Computer)
