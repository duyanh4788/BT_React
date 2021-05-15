import React, { Component } from "react";
import Car from "./Car";
import Class from "./Class";

export default class BTComponent extends Component {
  render() {
    return (
      <div>
        <Car />
        <Class />
      </div>
    );
  }
}
