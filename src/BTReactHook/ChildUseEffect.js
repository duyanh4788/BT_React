import React, { useState, useEffect } from "react";

function ChildUseEffect() {
  let [number] = useState(1);
  useEffect(() => {
    console.log("componentdidmount");
    return () => {
      console.log("componentwillunmount");
    };
  }, [number]);
  console.log("render child");
  return (
    <div>
      <textarea></textarea>
      <button>gửi</button>
    </div>
  );
}

export default ChildUseEffect;
