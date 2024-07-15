import React from "react";
import { useComponentContext } from "../Utils/ContextProvider";

function Sidebar() {
  const context = useComponentContext();
  return (
    <div className="min-w-[26rem] border bg-[#202020] h-screen">Sidebar</div>
  );
}

export default Sidebar;
