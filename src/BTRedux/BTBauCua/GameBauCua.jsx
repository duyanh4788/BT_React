import React from "react";
import BetPoints from "./BetPoints";
import "./css/GameBauCua.css";
import ListDice from "./ListDice";
import ListSquash from "./ListSquash";
function GameBauCua() {
  return (
    <div className="gameBauCua">
      <h1>Game Bầu Cua</h1>
      <BetPoints />
      <div className="container rowTwo row">
        <div className="col-8">
          <ListSquash />
        </div>
        <div className="col-4 listDice">
          <ListDice />
        </div>
      </div>
    </div>
  );
}

export default GameBauCua;
