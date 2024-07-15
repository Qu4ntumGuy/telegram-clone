import React from "react";
import { useComponentContext } from "../Utils/ContextProvider";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  const context = useComponentContext();
  return (
    <div className="w-full md:max-w-[26rem] bg-[#202020] border-r border-[#181818] h-screen">
      <div className="flex items-center justify-start px-4 h-14 w-full">
        <div className="px-2 text-stone-300">
          <MenuIcon />
        </div>

        <div className="flex border text-stone-500 w-full px-3 mx-2 border-stone-800 rounded-full p-2 bg-[#181818]">
          <div className="w-auto">
            <SearchIcon />
          </div>
          <form>
            <input className="w-full bg-inherit pl-2" placeholder="Search" />
          </form>
        </div>
      </div>
      <div className=" overflow-y-auto"></div>
    </div>
  );
}

export default Sidebar;
