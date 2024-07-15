import React from "react";

function Chat({ name, profile }) {
  return (
    <div className="flex w-full p-2 px-3 items-center hover:bg-stone-700 hover:bg-opacity-30 rounded-lg">
      <div className="flex justify-center items-center text-xl font-semibold bg-gradient-to-br from-blue-400 rounded-full w-14 h-14 to-blue-500">
        P
      </div>
      <div className="flex flex-col ml-3 w-[80%]">
        <div className="flex">
          <div className="font-semibold">Name</div>
          <div>Date/Time</div>
        </div>
        <div>Last Message</div>
      </div>
    </div>
  );
}

export default Chat;
