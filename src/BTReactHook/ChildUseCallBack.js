import React, { memo } from "react";

function ChildUseCallBack(props) {
  let title = " vũ duy anh";
  let object = { id: 1, age: "20" };
  console.log(title);
  console.log(object);
  console.log("render-child");
  return (
    <div>
      <span>{props.notiFy()}</span>
    </div>
  );
}

export default memo(ChildUseCallBack);
