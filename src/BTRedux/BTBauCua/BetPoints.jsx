import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { againGameAction } from "../../redux/action/GameBauCua_Ation";

function BetPoints() {
  const dispatch = useDispatch();
  const handleAgain = () => {
    dispatch(againGameAction());
  };
  const totalPoint = useSelector((state) => {
    return state.GameBauCuaReducer.totalPoint;
  });
  return (
    <div className="divBetpoint">
      <div>
        <span className="textBetpoint">
          Tiền Thưởng :
          <span className="point"> {totalPoint.toLocaleString()} $</span>
        </span>
      </div>
      <div>
        <button className="btnBetpoint" onClick={handleAgain}>
          Again
        </button>
      </div>
    </div>
  );
}

export default BetPoints;
