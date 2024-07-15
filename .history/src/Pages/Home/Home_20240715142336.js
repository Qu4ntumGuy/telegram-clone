import React from "react";
import backgroundImage from "../../Assets/Desktop.webp";
import Topbar from "../../Components/Topbar";

function Home() {
  const image =
    "https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/pattern_02-150x150.png";

  //   const divStyle = {
  //     width: "100%",
  //     height: "100vh", // Adjust the height as needed
  //     backgroundImage: `url(${backgroundImage})`,
  //     backgroundSize: "cover", // Ensures the image covers the entire div
  //     backgroundPosition: "center", // Centers the image
  //   };
  return (
    <div
      className="md:flex flex-col justify-center bg-cover h-screen hidden md:w-full "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <div className="top-0 mb-auto h-14 bg-[#202020] border-b border-[#181818]">
        <Topbar />
      </div>
      <div className="flex flex-col h-full">
        <div className="top-0">Chat Section</div>
        <div className="bottom-0 mt-auto">Input Section</div>
      </div> */}
    </div>
  );
}

export default Home;