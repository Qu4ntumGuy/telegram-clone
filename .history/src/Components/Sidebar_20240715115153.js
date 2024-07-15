import React from "react";
import { useComponentContext } from "../Utils/ContextProvider";

function Sidebar() {
  const context = useComponentContext();
  return (
    <div className="md:min-w-[26rem] bg-[#202020] border-r border-[#181818] h-screen">
      Sidebar
    </div>
  );
}

export default Sidebar;
