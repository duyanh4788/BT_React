import React, { useState } from "react";
import { Prompt } from "react-router";

function LoginNL(props) {
  const [userLogin, setUserLogin] = useState({
    userName: "",
    passWord: "",
    status: false,
  });
  console.log(userLogin);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newUserLogIn = {
      ...userLogin,
      [name]: value,
    };
    let valid = true;
    for (let key in newUserLogIn) {
      if (key !== "status") {
        if (newUserLogIn[key].trim() === "") {
          valid = false;
        }
      }
    }
    if (!valid) {
      newUserLogIn.status = true;
    } else {
      newUserLogIn.status = false;
    }
    setUserLogin(newUserLogIn);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userLogin.userName === "1" && userLogin.passWord === "123") {
      //   props.history.goBack(); về lại trang trước đó
      //   props.history.push("/homenl"); // về trang chỉ định
      props.history.replace("/homenl"); // thay đổi nội dung
      localStorage.setItem("userLogin_navlink", JSON.stringify(userLogin));
    } else {
      alert("loginFaild");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="display-4">Log In</h3>
      <div className="form-group">
        <p>UserName</p>
        <input
          name="userName"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          name="passWord"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          LogIn
        </button>
      </div>
      <Prompt
        when={userLogin.status}
        message={(location) => {
          console.log(location);
          return "lave stay";
        }}
      />
    </form>
  );
}

export default LoginNL;
