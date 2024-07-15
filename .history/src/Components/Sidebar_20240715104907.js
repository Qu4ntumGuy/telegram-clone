import React from "react";
import { useComponentContext } from "../Utils/ContextProvider";

function Sidebar() {
  const context = useComponentContext();
  return (
    <div className="min-w-[25rem] border border-gray-700 h-screen">Sidebar</div>
  );
}

export default Sidebar;
