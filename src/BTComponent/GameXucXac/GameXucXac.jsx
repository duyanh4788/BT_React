import React, { Component } from "react";
import "./css/gameXucXac.css";
import "../style.scss";
import BtnTaiXiu from "./BtnTaiXiu";
import KetQua from "./KetQua";
import PlayGame from "./PlayGame";

export class GameXucXac extends Component {
  state = {
    taiXiu: false,
    soBanThang: 0,
    soBanChoi: 0,
    xucXac: [
      { diem: 1, imgXucXac: "./img/gameXucXac/1.png" },
      { diem: 1, imgXucXac: "./img/gameXucXac/1.png" },
      { diem: 1, imgXucXac: "./img/gameXucXac/1.png" },
    ],
  };
  rederTaiXiu = (taixiu) => {
    this.setState({
      taiXiu: taixiu,
    });
  };
  renderRamDom = () => {
    let sortXucXac = [];
    for (let i = 0; i < 3; i++) {
      let soRanDom = Math.floor(Math.random() * 6) + 1;
      let mangRanDom = {
        diem: soRanDom,
        imgXucXac: `./img/gameXucXac/${soRanDom}.png`,
      };
      sortXucXac.push(mangRanDom);
    }
    this.setState({
      xucXac: sortXucXac,
    });
  };
  renderKetQua = () => {
    let soBanChoi = this.state.soBanChoi;
    let soBanThang = this.state.soBanThang;
    soBanChoi += 1;
    let tongBanThang = this.state.xucXac.reduce((tong, item, index) => {
      return (tong += item.diem);
    }, 0);
    if (
      (tongBanThang > 11 && this.state.taiXiu === true) ||
      (tongBanThang <= 11 && this.state.taiXiu === false)
    ) {
      soBanThang += 1;
    }
    this.setState({
      soBanChoi,
      soBanThang,
    });
  };
  render() {
    const { taiXiu, soBanThang, soBanChoi } = this.state;
    return (
      <div className="gameXucXac">
        <h1 className="textGameXX">Game Xúc Xắc</h1>
        <div className="container btnPlay">
          <BtnTaiXiu state={this.state} rederTaiXiu={this.rederTaiXiu} />
        </div>
        <KetQua taiXiu={taiXiu} soBanThang={soBanThang} soBanChoi={soBanChoi} />
        <div className="">
          <PlayGame
            renderRamDom={this.renderRamDom}
            xucXac={this.state}
            renderKetQua={this.renderKetQua}
          />
        </div>
      </div>
    );
  }
}

export default GameXucXac;
