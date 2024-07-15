import React, { createContext, useContext } from "react";

const CreateContext = createContext();

export const MyComponentProvider = ({ children }) => {
  return <CreateContext.Provider value={{}}>{children}</CreateContext.Provider>;
};

export const ComponentContext = () => {
  return useContext(CreateContext);
};
