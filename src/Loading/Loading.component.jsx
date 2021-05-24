import React from "react";
import { useSelector } from "react-redux";
import "./LoadingComponentStyle.css";

function Loadingcomponent() {
  const isLoading = useSelector((state) => {
    return state.LoadingReducer.isLoading;
  });
  if (isLoading) {
    return (
      <div className="bgLoading">
        <img src="./img/loading.gif" alt="imgloading" />
      </div>
    );
  } else {
    return null;
  }
}

export default Loadingcomponent;
