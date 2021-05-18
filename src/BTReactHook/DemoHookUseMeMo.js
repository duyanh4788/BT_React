import React, { useState, useMemo } from "react";
import ChildUseMeMo from "./ChildUseMeMo";

function DemoHookUseMeMo() {
  let [like, setLike] = useState(1);
  let cart = [
    { id: 1, name: "a", price: 1000 },
    { id: 2, name: "b", price: 2000 },
    { id: 3, name: "c", price: 3000 },
  ];
  const cartMemo = useMemo(() => cart, []);
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
          <p className="card-text">{like}</p>
          <button
            className="btn btn-info"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like
          </button>
        </div>
      </div>
      <ChildUseMeMo cartMemo={cartMemo} />
    </div>
  );
}

export default DemoHookUseMeMo;
