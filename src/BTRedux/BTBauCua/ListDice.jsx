import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playGameAction } from "../../redux/action/GameBauCua_Ation";
import Dice from "./Dice";

function ListDice() {
  const dispatch = useDispatch();
  const listDice = useSelector((state) => {
    return state.GameBauCuaReducer.listDice;
  });
  console.log(listDice);
  const handlePlayGame = () => {
    dispatch(playGameAction());
  };
  const renderListDice = () => {
    return listDice.map((item, index) => {
      return (
        <div className="col-12" key={index}>
          <Dice dice={item} />
        </div>
      );
    });
  };
  return (
    <div className="row mt-5">
      {renderListDice()}
      <div className="col-12 mt-2">
        <button onClick={handlePlayGame}>Play Game</button>
      </div>
    </div>
  );
}

export default ListDice;
