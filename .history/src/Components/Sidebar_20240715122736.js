import React from "react";
import { useComponentContext } from "../Utils/ContextProvider";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  const context = useComponentContext();
  return (
    <div className="w-full md:max-w-[26rem] bg-[#202020] border-r border-[#181818] h-screen">
      <div className="flex p-2 h-14">
        <div>
          <MenuIcon />
        </div>
        <div>
          <div className="flex">
            <div>
              <SearchIcon />
            </div>
            <form></form>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Sidebar;
