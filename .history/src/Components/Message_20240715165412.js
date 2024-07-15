import React from "react";

function Message() {
  return (
    <div className="w-full">
      <div className="max-w-[30rem]">
        <div className="h-11 w-11"></div>
        <div className="flex flex-col bg-[#181818]">
          <div> Name</div>
          <div className="flex">
            <div>Message</div>
            <div className="text-xs text-stone-500">time</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
