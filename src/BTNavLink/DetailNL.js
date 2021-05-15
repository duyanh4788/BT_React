import React from "react";

function DetailNL(props) {
  return (
    <div>
      Giá Trị id: {props.match.params.id}
      Giá Trịhiện tại : {props.match.path}
    </div>
  );
}

export default DetailNL;
