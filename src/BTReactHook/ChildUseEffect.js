import React, { memo } from "react";

function ChildUseEffect(props) {
  const { showName } = props
  console.log('child', { showName });
  // let [number] = useState(1);
  // useEffect(() => {
  //   console.log("componentdidmountchild");
  //   return () => {
  //     console.log("componentwillunmount");
  //   };
  // }, [number]);
  // console.log("render child");
  return (
    <div>
      <textarea></textarea>
      <p></p>
      <button>gửi</button>
    </div>
  );
}

export default memo(ChildUseEffect);
