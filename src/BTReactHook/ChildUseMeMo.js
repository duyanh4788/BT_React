import React, { memo } from "react";

function ChildUseMeMo(props) {
  console.log("ChildUseMeMo");
  return (
    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {props.cartMemo.map((item, index) => {
          return (
            <tr key={index}>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.price}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default memo(ChildUseMeMo);
