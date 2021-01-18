import React from "react";
import ContextState from "./ContextState.js";

const ContextProject = ({ children }) => {
  return (
    <>
      <ContextState.Provider value={"Hello"}>{children}</ContextState.Provider>
    </>
  );
};

export default ContextProject;
