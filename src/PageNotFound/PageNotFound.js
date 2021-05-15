import React from "react";
import { NavLink } from "react-router-dom";

function PageNotFound(props) {
  return (
    <div>
      <p> 404 Page Not Found </p>
      <NavLink to="/" exact>
        Home Fist
      </NavLink>
      <br />
      <NavLink to="/homenl" exact>
        Home Navlink
      </NavLink>
    </div>
  );
}

export default PageNotFound;
