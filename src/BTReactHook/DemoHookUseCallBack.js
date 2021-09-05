import React, { useCallback, useState } from "react";
import ChildUseCallBack from "./ChildUseCallBack";

function DemoHookUseCallBack() {
  let [like, setLike] = useState(1);
  let [number, setNumber] = useState(1);
  console.log("render");

  const notiFy = () => {
    return `Bạn đã like ${like} lần !`;
  };
  const callBack = useCallback(notiFy, [like]);

  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://picsum.photos/200/300"
          alt="img"
          style={{ width: "200px", height: "200px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{number}</h4>
          <p className="card-text">{like}</p>
          <button
            className="btn btn-info"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              setNumber(number + 1);
            }}
          >
            number
          </button>
        </div>
      </div>
      <ChildUseCallBack notiFy={callBack} />
    </div>
  );
}

export default DemoHookUseCallBack;
