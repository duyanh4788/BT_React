import React from "react";
import { Redirect } from "react-router";

function Profile(props) {
  if (localStorage.getItem("userLogin_navlink")) {
    return <div>profile</div>;
  } else {
    alert("LogIn");
    return <Redirect to="/homenl" />;
  }
}

export default Profile;
