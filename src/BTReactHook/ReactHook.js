import React from "react";
import ContextProvider from "./Context/ContextProvider";
import DemoHookSpring from "./React-Spring/DemoHookSpring";

function ReactHook() {
  return (
    <ContextProvider>
      <DemoHookSpring />
    </ContextProvider>
  );
}

export default ReactHook;
