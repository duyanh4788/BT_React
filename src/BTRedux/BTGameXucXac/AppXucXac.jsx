import React, { Component } from "react";
import "./css/style.css";
import KetQua from "./KetQua";
import PlayGame from "./PlayGame";
import TaiXiu from "./TaiXiu";

class AppXucXac extends Component {
  render() {
    return (
      <div className="gameXucXac">
        <h1>Game Xúc Xắc</h1>
        <TaiXiu />
        <KetQua />
        <PlayGame />
      </div>
    );
  }
}

export default AppXucXac;
