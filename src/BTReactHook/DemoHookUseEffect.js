import React, { useState, useEffect } from "react";
import ChildUseEffect from "./ChildUseEffect";

function DemoHookUseEffect() {
  let [number, setNumber] = useState(1);
  let [like, setLike] = useState(1);
  console.log(like);
  useEffect(() => {
    // chạy sau render thay thế cho componentdidmount
    console.log("componentdidmount");
  }, []);
  useEffect(() => {
    // chạy sau render thay thế cho componentdidupdate
    console.log("componentdidupdate");
  }, [number, like]);
  console.log("render");
  return (
    <div className="container">
      <div className="card">
        <img
          className="card-img-top"
          src="https://picsum.photos/200/300"
          alt="img"
          style={{ width: "200px", height: "200px" }}
        />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">{number} ♥</p>
          <button
            className="btn btn-info"
            onClick={() => {
              setNumber(number + 1);
            }}
          >
            Like
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like
          </button>
        </div>
        {like === 1 ? <ChildUseEffect /> : ""}
      </div>
    </div>
  );
}

export default DemoHookUseEffect;
