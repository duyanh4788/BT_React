import React from "react";
import Squash from "./Squash";
import { useSelector } from "react-redux";

function ListSquash() {
  const listBetting = useSelector((state) => {
    return state.GameBauCuaReducer.ListBetting;
  });
  const renderListBetting = () => {
    return listBetting.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <Squash sQuash={item} />
        </div>
      );
    });
  };
  return (
    <>
      <div className="row mt-5">{renderListBetting()}</div>
    </>
  );
}

export default ListSquash;
