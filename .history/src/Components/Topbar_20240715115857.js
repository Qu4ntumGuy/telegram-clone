import React from "react";

function Topbar() {
  return (
    <div className="flex px-2">
      <div>
        <div>image</div>
        <div className="flex flex-col">
          <div>Name</div>
          <div>Last Seen</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Topbar;
