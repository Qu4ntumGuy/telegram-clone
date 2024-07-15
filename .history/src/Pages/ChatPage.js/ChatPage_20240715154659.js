import React from "react";
import backgroundImage from "../../Assets/Desktop.webp";
import Topbar from "../../Components/Topbar";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachmentIcon from "@mui/icons-material/Attachment";

function ChatPage() {
  const image =
    "https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/pattern_02-150x150.png";

  return (
    <div
      className="md:flex flex-col justify-center bg-cover h-screen hidden md:w-full "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="top-0 mb-auto h-14 bg-[#202020] border-b border-[#181818]">
        <Topbar />
      </div>
      <div className="flex h-full w-full">
        <div className="flex flex-col w-[60%] mx-auto border border-black h-hull">
          <div className="top-0">Chat Section</div>
          <div className="bottom-0 mt-auto pb-5">
            <div className="flex">
              <div className="flex border p-2 rounded-full">
                <div>
                  <SentimentSatisfiedAltIcon />
                </div>
                <div className="">
                  <form>
                    <input
                      type="text"
                      placeholder="Type a message"
                      className="w-full bg-[#202020] text-white outline-none"
                    />
                  </form>
                </div>
                <div>
                  <AttachmentIcon fontSize="large" />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
