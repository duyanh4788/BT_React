import React, { useState } from "react";

export default function DemoHookUseState(props) {
  let [state, setState] = useState({ like: 0 }); // tương đương contructor class component lifecycle
  const hanldeLike = () => {
    setState({
      like: state.like + 1,
    });
  };
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://picsum.photos/200/300"
        alt="img"
        style={{ width: "200px", height: "200px" }}
      />
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text">{state.like}</p>
      </div>
      <button className="btn btn-info" onClick={hanldeLike}>
        Like
      </button>
    </div>
  );
}
