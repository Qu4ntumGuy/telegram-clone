import React from "react";
import { useComponentContext } from "../Utils/ContextProvider";

function Sidebar() {
  const context = useComponentContext();
  return <div>Sidebar</div>;
}

export default Sidebar;
