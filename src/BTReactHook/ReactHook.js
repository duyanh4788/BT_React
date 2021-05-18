import React from "react";
import ContextProvider from "./Context/ContextProvider";
import DemoHookUseContext from "./DemoHookUseContext";

function ReactHook() {
  return (
    <ContextProvider>
      <DemoHookUseContext />
    </ContextProvider>
  );
}

export default ReactHook;
