import React, { useState, useRef } from "react";

function DemoHookUseRef() {
  let inputUserName = useRef(null);
  let inputPassWord = useRef(null);

  let userName = useRef("");
  let [user, setUser] = useState({ userName: "" });

  const hanldeChange = () => {
    userName.current = "abc";
    setUser({
      userName: userName.current,
    });
  };
  console.log(user);
  console.log(userName);
  return (
    <div className="container">
      <div className="form-group">
        <h3>UserName</h3>
        <input
          type="text"
          ref={inputUserName}
          name="userName"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <h3>Password</h3>
        <input
          type="text"
          ref={inputPassWord}
          name="passWord"
          className="form-control"
        />
      </div>
      <button
        className="btn btn-success"
        onClick={() => {
          hanldeChange();
        }}
      >
        login
      </button>
    </div>
  );
}

export default DemoHookUseRef;
