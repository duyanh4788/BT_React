import React, { Component } from "react";

export class Player extends Component {
  renderbtnOTX = () => {
    const { mangPlayer, renderOTX } = this.props;
    return mangPlayer.map((otx, index) => {
      let borderr = {};
      if (otx.datCuoc) {
        borderr = { border: "5px solid #45d994" };
      }
      return (
        <button
          className="btn btnOTX"
          style={borderr}
          key={index}
          onClick={() => renderOTX(otx.ma)}
        >
          <img src={otx.imgOTX} alt={otx.imgOTX} width={30} />
        </button>
      );
    });
  };
  render() {
    const { mangPlayer } = this.props;
    return (
      <div className="col-4 playerGame">
        <div className="theThink">
          <img src={mangPlayer.find(item=>item.datCuoc===true).imgOTX} 
          alt={mangPlayer.find(item=>item.datCuoc===true).imgOTX} width={90} />
        </div>
        <div className="speech-bubble"></div>
        <img src="./img/gameOnTuTi/player.png" alt="" width={200} />
        <div className="otn">{this.renderbtnOTX()}</div>
      </div>
    );
  }
}

export default Player;
