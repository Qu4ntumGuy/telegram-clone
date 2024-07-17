import React from "react";
import backgroundImage from "../../Assets/backgroud.jpg";
import Topbar from "../../Components/Topbar";

function Home() {
  return (
    <div
      className="md:flex flex-col bg-black justify-center bg-cover h-screen hidden md:w-full "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
}

export default Home;
