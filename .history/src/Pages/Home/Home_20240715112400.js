import React from "react";
import backgroundImage from "../../Assets/pattern.png";

function Home() {
  const image =
    'https://telegram.org/js/telegram-widget.js?22" data-telegram-post="defaultwallpapers/151" data-width="100%';

  //   const divStyle = {
  //     width: "100%",
  //     height: "100vh", // Adjust the height as needed
  //     backgroundImage: `url(${backgroundImage})`,
  //     backgroundSize: "cover", // Ensures the image covers the entire div
  //     backgroundPosition: "center", // Centers the image
  //   };
  return (
    <div
      className="flex flex-col justify-center bg-contain bg-center h-screen bg-slate-600 w-full "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="top-0 mb-auto h-14 border-b border-gray-800">Topbar</div>
      <div className="flex flex-col h-full">
        <div className="top-0">Chat Section</div>
        <div className="bottom-0 mt-auto">Input Section</div>
      </div>
    </div>
  );
}

export default Home;
