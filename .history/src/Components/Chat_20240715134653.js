import React from "react";

function Chat({ name, profile }) {
  return (
    <div className="flex hover:bg-stone-700 hover:bg-opacity-30 p-2 mx-2 rounded-lg">
      <div className="text-center align-middle bg-gradient-to-br from-blue-400 rounded-full w-14 h-14 to-blue-500">
        P
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div>Name</div>
          <div>Date/Time</div>
        </div>
        <div>Last Message</div>
      </div>
    </div>
  );
}

export default Chat;