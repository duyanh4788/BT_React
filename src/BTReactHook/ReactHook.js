import React from "react";
import ContextProvider from "./Context/ContextProvider";
// import DemoHookUseState from "./DemoHookUseState";
import DemoQuestion from "./DemoQuestion"

function ReactHook() {
  return (
    <ContextProvider>
      {/* <DemoHookUseState /> */}
      <DemoQuestion/>
    </ContextProvider>
  );
}

export default ReactHook;
