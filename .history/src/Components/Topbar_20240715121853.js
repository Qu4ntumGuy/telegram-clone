import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Topbar() {
  return (
    <div className="flex px-6 h-14">
      <div className="flex-1 flex items-center">
        <div className="bg-yellow-600 p-3 rounded-full h-11 w-11 text-center align-middle font-bold">
          <div className="text-center align-middle">GB</div>
        </div>
        <div className="flex flex-col pl-5 w-full">
          <div className="font-semibold">Name</div>
          <div className="text-sm"> Last Seen</div>
        </div>
      </div>
      <div className="flex items-center space-x-6 pl-3 text-stone-200">
        <div>
          <CallOutlinedIcon />
        </div>
        <div>
          <SearchIcon />
        </div>
        <div>
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
