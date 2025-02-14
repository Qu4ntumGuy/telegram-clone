import React from "react";

function ChatPage() {
  return (
    <div
      className="md:flex flex-col justify-center bg-cover h-screen hidden md:w-full "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="top-0 mb-auto h-14 bg-[#202020] border-b border-[#181818]">
        <Topbar />
      </div>
      <div className="flex flex-col h-full">
        <div className="top-0">Chat Section</div>
        <div className="bottom-0 mt-auto">Input Section</div>
      </div>
    </div>
  );
}

export default ChatPage;
