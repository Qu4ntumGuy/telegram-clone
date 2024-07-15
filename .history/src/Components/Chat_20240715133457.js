import React from "react";

function Chat({ name, profile }) {
  return (
    <div className="flex hover:bg-stone-800">
      <div>Profile</div>
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
