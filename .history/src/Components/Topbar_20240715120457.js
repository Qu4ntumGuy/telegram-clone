import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Topbar() {
  return (
    <div className="flex px-5 h-14">
      <div className="flex-1 flex">
        <div>image</div>
        <div className="flex flex-col">
          <div className="font-semibold">Name</div>
          <div className="text-sm"> Last Seen</div>
        </div>
      </div>
      <div className="flex items-center space-x-6">
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
