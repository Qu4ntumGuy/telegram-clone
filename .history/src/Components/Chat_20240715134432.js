import React from "react";

function Chat({ name, profile }) {
  return (
    <div className="flex hover:bg-stone-700 hover:bg-opacity-30 p-2 mx-2 rounded-lg">
      <div className=" bg-gradient-to-br from-blue-500 to-pink-500">
        Profile
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
