import React from "react";
import backgroundImage from "../../Assets/Desktop.webp";
import Topbar from "../../Components/Topbar";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SendIcon from "@mui/icons-material/Send";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

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
        <div className="flex flex-col w-[60%] mx-auto border border-black">
          <div className="top-0">Chat Section</div>
          <div className="bottom-0 mt-auto w-full pb-5">
            <div className="flex w-full items-center">
              <div className="flex p-3 w-[90%] rounded-2xl bg-[#202020] justify-center items-center">
                <div>
                  <SentimentSatisfiedAltIcon />
                </div>
                <form className="w-full pl-3 flex justify-center items-center">
                  <input
                    type="text"
                    placeholder="Message"
                    className="w-full bg-[#202020] text-white outline-none"
                  />
                </form>

                <div>
                  <AttachmentIcon className="-rotate-45" />
                </div>
              </div>
              <div className="flex justify-center items-center rounded-full w-12 h-12 mx-2 hover:bg-violet-500 bg-violet-400">
                <KeyboardVoiceIcon />
                <SendIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
