import React, { Component } from "react";
import { PureComponent } from "react";


export class Computer extends PureComponent {
  render() {
    let keyFrame = `
    @keyframes itemRanDom${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0px;}
    }`;
    const { mangComputer } = this.props;
    return (
      <div className="col-4 computerGame">
        <style> {keyFrame}</style>
        <div className="theThink">
          <img
            style={{
              animation: `itemRanDom${Date.now()} 0.5s`,
              position: "absolute",
              left: "15%",
            }}
            className="imgComputer"
            src={mangComputer.imgOTX}
            alt={mangComputer.imgOTX}
            width={90}
          />
        </div>
        <div className="speech-bubble"></div>
        <div>
          <img src="./img/gameOnTuTi/playerComputer.png" alt="" width={200} />
        </div>
      </div>
    );
  }
}

export default Computer;
