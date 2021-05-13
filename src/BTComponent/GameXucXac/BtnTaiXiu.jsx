import React, { Component } from "react";
import XucXac from "./XucXac";

export class BtnTaiXiu extends Component {
  render() {
    const { state, rederTaiXiu } = this.props;
    return (
      <div className="row">
        <div className="col-4">
          <button className="btn btnTX Tai" onClick={() => rederTaiXiu(true)}>
            Tài
          </button>
        </div>
        <XucXac state={state} />
        <div className="col-4">
          <button className="btn btnTX Xiu" onClick={() => rederTaiXiu(false)}>
            Xỉu
          </button>
        </div>
      </div>
    );
  }
}

export default BtnTaiXiu;
