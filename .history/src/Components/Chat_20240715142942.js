import React from "react";

function Chat({ name, profile, color }) {
  return (
    <div className="flex w-full p-2 items-center cursor-pointer justify-between hover:bg-stone-700 hover:bg-opacity-30 rounded-lg">
      <div className="flex justify-center items-center text-xl font-semibold bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full w-14 h-14 ">
        {profile ? profile : "P"}
      </div>
      <div className="flex flex-col w-[83%]">
        <div className="flex">
          <div className="font-semibold ">Name</div>
          <div className="right-0 ml-auto text-xs text-stone-400 font-semibold">
            Date/Time
          </div>
        </div>
        <div>Last Message</div>
      </div>
    </div>
  );
}

export default Chat;
