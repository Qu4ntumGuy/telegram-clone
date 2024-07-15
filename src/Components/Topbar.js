import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Topbar() {
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);

  function formatDateTime(input) {
    const date = new Date(input);

    // Format date1 as "dd/mm/yy"
    const date1 = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });

    // Format d2 as "Month DD"
    const d2 = date.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
    });

    // Format time as "hh:mm"
    const t = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return {
      date1,
      d2,
      t,
    };
  }

  return (
    <div className="flex px-4 h-14">
      <div className="flex-1 flex items-center">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-full h-11 w-11 flex justify-center items-center font-bold">
          <div className="text-center align-middle">
            {data?.profile ? data?.profile : "D"}
          </div>
        </div>
        <div className="flex flex-col pl-4 w-full">
          <div className="font-semibold">
            {data?.name ? data?.name : "Deleted Account"}
          </div>
          <div className="text-sm">
            <span>Last seen at</span>{" "}
            {formatDateTime(data?.time).t
              ? formatDateTime(data?.time).t
              : "12:00"}
          </div>
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
