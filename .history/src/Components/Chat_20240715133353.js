import React from "react";

function Chat({ name, profile }) {
  return (
    <div className="flex">
      <div>Profile</div>
      <div className="flex flex-col">
        <div>
          <div>Name</div>
          <div>Date/Time</div>
        </div>
        <div>Last Message</div>
      </div>
    </div>
  );
}

export default Chat;
