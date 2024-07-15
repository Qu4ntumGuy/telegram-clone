import React from "react";
import { useComponentContext } from "../Utils/ContextProvider";

function Sidebar() {
  const context = useComponentContext();
  return <div className="min-w-[20rem] border border-gra-700">Sidebar</div>;
}

export default Sidebar;
