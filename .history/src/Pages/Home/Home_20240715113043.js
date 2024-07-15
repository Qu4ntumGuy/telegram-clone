import React from "react";
import backgroundImage from "../../Assets/pattern.png";

function Home() {
  const image =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.1a23.com%2F2020%2F02%2F13%2Ftelegram-chat-backgrounds-patterns-extracted%2F&psig=AOvVaw0t45ZfeX_2Vm__bb-OGuzn&ust=1721109628967000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLj99JGvqIcDFQAAAAAdAAAAABAE";

  //   const divStyle = {
  //     width: "100%",
  //     height: "100vh", // Adjust the height as needed
  //     backgroundImage: `url(${backgroundImage})`,
  //     backgroundSize: "cover", // Ensures the image covers the entire div
  //     backgroundPosition: "center", // Centers the image
  //   };
  return (
    <div
      className="flex flex-col justify-center bg-contain bg-center h-screen bg-slate-200 w-full "
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
