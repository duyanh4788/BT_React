import React from "react";
import ContextProvider from "./Context/ContextProvider";
import DemoHookUseState from "./DemoHookUseState";

function ReactHook() {
  return (
    <ContextProvider>
      <DemoHookUseState />
    </ContextProvider>
  );
}

export default ReactHook;
