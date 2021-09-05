import React, { useState } from "react";

function DemoQuestion() {
  let [state] = useState({
    listMuisc: [
      { baiHat: "Hay Den Ben A", sangTac: "Ho Ngoc A" },
      { baiHat: "Hay Den Ben B", sangTac: "Ho Ngoc B" },
      { baiHat: "Hay Den Ben C", sangTac: "Ho Ngoc C" },
    ],
  });

  return (
    <div>
      {state.listMuisc.map((item, index) => {
        return (
          <span key={index}>
            <p>
              Bài Hát : {item.baiHat} - Ca Sĩ : {item.sangTac}
            </p>
          </span>
        );
      })}
    </div>
  );
}

export default DemoQuestion;


