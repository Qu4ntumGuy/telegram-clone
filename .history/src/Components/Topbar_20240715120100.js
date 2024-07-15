import React from "react";

function Topbar() {
  return (
    <div className="flex px-2 h-14">
      <div className="flex">
        <div>image</div>
        <div className="flex flex-col">
          <div className="font-semibold">Name</div>
          <div className="text-sm"> Last Seen</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Topbar;
