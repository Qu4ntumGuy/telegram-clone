import React from "react";

function Home() {
  return (
    <div className="flex flex-col justify-center h-screen border-r-4 w-full">
      <div className="top-0 mb-auto h-14 border-b border-gray-800">Topbar</div>
      <div className="flex flex-col h-full">
        <div className="">Chat Section</div>
        <div className="bottom-0 mt-auto">Input Section</div>
      </div>
    </div>
  );
}

export default Home;
