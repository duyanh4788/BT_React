import React, { useState, useEffect, useCallback, useMemo } from "react";
import DemoHookUseEffect from "./DemoHookUseEffect";
import ChildUseEffect from "./ChildUseEffect";

export default function DemoHookUseState(props) {
  let [state, setState] = useState({ like: 0 }); // tương đương contructor class component lifecycle
  let [dislikes, setDislike] = useState({ dislike: 0 }); // tương đương contructor class component lifecycle
  const hanldeLike = () => {
    setState({
      like: state.like + 1,
    });
  };
  useEffect(() => {
    // chạy sau render thay thế cho componentdidmount
    console.log("componentdidmount1");
  }, []);
  useEffect(() => {
    // chạy sau render thay thế cho componentdidmount
    console.log("componentdidmount2");
    document.title = `SỐ LIKE : ${state.like}`
  });
  useEffect(() => {
    // chạy sau render thay thế cho componentdidmount
    console.log("componentdidmount3");
  }, [state.like]);
  const hanldeDiskLike = () => {
    setDislike({
      dislike: dislikes.dislike + 1,
    });
  };
  const showName = () => {
    console.log('lisa - blackpink');
  }
  const useCall = useCallback(showName, [])
  const funCazzy = () => {
    let count = 0
    for (let i = 0; i < 1000; i++) {
      count += i
      console.log(count);
    }
    return count
  }
  const useCazy = useMemo(() => funCazzy(), [])
  return (
    <div className="card">
      <ChildUseEffect showName={useCall} />
      <section>{state.like % 2 === 0 ? <DemoHookUseEffect /> : null}</section>
      <img
        className="card-img-top"
        src="https://picsum.photos/200/300"
        alt="img"
        style={{ width: "200px", height: "200px" }}
      />
      <div className="card-body">
        <h4 className="card-title">kết quả : {useCazy}</h4>
        <p className="card-text">{state.like}</p>
        <p className="card-text">{dislikes.dislike}</p>
      </div>
      <button className="btn btn-info" onClick={hanldeLike}>
        Like
      </button>
      <button className="btn btn-info" onClick={hanldeDiskLike}>
        Disk Like
      </button>
    </div>
  );
}
