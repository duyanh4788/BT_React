import React, { Component } from "react";
import "./css/buble.css";
import "../style.scss";
import Player from "./Player";
import Computer from "./Computer";
import KetQua from "./KetQua";
import PlayGame from "./PlayGame";

export class GameOtX extends Component {
  state = {
    mangPlayer: [
      { ma: "bao", imgOTX: "./img/gameOnTuTi/bao.png", datCuoc: true },
      { ma: "bua", imgOTX: "./img/gameOnTuTi/bua.png", datCuoc: false },
      { ma: "keo", imgOTX: "./img/gameOnTuTi/keo.png", datCuoc: false },
    ],
    ketQua: "",
    soBanThang: 0,
    soBanChoi: 0,
    mangComputer: { ma: "bao", imgOTX: "./img/gameOnTuTi/bao.png" },
  };
  renderOTX = (madatcuoc) => {
    let updateMangPlayer = [...this.state.mangPlayer];
    updateMangPlayer = updateMangPlayer.map((item, index) => {
      return { ...item, datCuoc: false };
    });
    let index = updateMangPlayer.findIndex((item) => item.ma === madatcuoc);
    if (index !== -1) {
      updateMangPlayer[index].datCuoc = true;
    }
    this.setState({
      mangPlayer: updateMangPlayer,
    });
  };
  renderComputer = () => {
    let count = 0;
    let ranDomLoop = setInterval(() => {
      let ranDom = Math.floor(Math.random() * 3);
      let ramDomComputer = this.state.mangPlayer[ranDom];
      count++;
      if (count > 6) {
        clearInterval(ranDomLoop);
        let player = this.state.mangPlayer.find(
          (item) => item.datCuoc === true
        );
        switch (player.ma) {
          case "bao":
            if (ramDomComputer.ma === "bao") {
              this.state.ketQua = " Hòa !!! ";
            } else if (ramDomComputer.ma === "keo") {
              this.state.ketQua = " Thua !!! ";
            } else {
              this.state.ketQua = " Thắng !!! ";
              this.state.soBanThang += 1;
            }
            break;
          case "bua":
            if (ramDomComputer.ma === "bua") {
              this.state.ketQua = " Hòa !!! ";
            } else if (ramDomComputer.ma === "bao") {
              this.state.ketQua = " Thua !!! ";
            } else {
              this.state.ketQua = " Thắng !!! ";
              this.state.soBanThang += 1;
            }
            break;
          case "keo":
            if (ramDomComputer.ma === "keo") {
              this.state.ketQua = " Hòa !!! ";
            } else if (ramDomComputer.ma === "bua") {
              this.state.ketQua = " Thua !!! ";
            } else {
              this.state.ketQua = " Thắng !!! ";
              this.state.soBanThang += 1;
            }
            break;
          default:
            break;
        }
        this.state.soBanChoi += 1;
      }
      this.setState({
        mangComputer: ramDomComputer,
      });
    }, 100);
  };
  render() {
    const {
      mangPlayer,
      ketQua,
      soBanThang,
      soBanChoi,
      mangComputer,
    } = this.state;
    return (
      <div className="gameOTX">
        <h1 className="textGame"> Game Oẳn Tù Xì </h1>
        <div className="playGame">
          <div className="row">
            <Player mangPlayer={mangPlayer} renderOTX={this.renderOTX} />
            <div className="col-4">
              <KetQua
                ketQua={ketQua}
                soBanThang={soBanThang}
                soBanChoi={soBanChoi}
              />
              <PlayGame renderComputer={this.renderComputer} />
            </div>
            <Computer mangComputer={mangComputer} />
          </div>
        </div>
      </div>
    );
  }
}

export default GameOtX;
