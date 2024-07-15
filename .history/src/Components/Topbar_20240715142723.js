import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Topbar() {
  return (
    <div className="flex px-4 h-14">
      <div className="flex-1 flex items-center">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-full h-11 w-11 text-center flex justify-center font-bold">
          <div className="text-center align-middle">GB</div>
        </div>
        <div className="flex flex-col pl-5 w-full">
          <div className="font-semibold">Name</div>
          <div className="text-sm"> Last Seen</div>
        </div>
      </div>
      <div className="flex items-center space-x-2 font-bold pl-3 text-stone-400">
        <div className=" rounded-full cursor-pointer hover:bg-stone-700 hover:bg-opacity-30 p-2">
          <CallOutlinedIcon />
        </div>
        <div className=" rounded-full cursor-pointer hover:bg-stone-700 hover:bg-opacity-30 p-2">
          <SearchIcon />
        </div>
        <div className=" rounded-full cursor-pointer hover:bg-stone-700 hover:bg-opacity-30 p-2">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
