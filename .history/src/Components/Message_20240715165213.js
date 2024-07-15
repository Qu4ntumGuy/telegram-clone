import React from "react";

function Message() {
  return (
    <div className="w-full">
      <div></div>
      <div className="flex flex-col bg-[#181818]">
        <div> Name</div>
        <div className="flex">
          <div>Message</div>
          <div className="text-xs text-stone-500">time</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
