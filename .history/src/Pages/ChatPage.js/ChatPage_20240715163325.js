import React, { useEffect, useState } from "react";
import backgroundImage from "../../Assets/Desktop.webp";
import Topbar from "../../Components/Topbar";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SendIcon from "@mui/icons-material/Send";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import InfoChat from "../../Components/InfoChat";
import { useParams } from "react-router-dom";
import axios from "axios";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const image =
    "https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/pattern_02-150x150.png";

  const chatId = useParams().id;

  console.log(chatId);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
      );
      console.log(res);
      setMessages(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [id]);

  const [text, setText] = useState("");

  return (
    <div
      className="md:flex flex-col justify-center bg-cover h-screen bg-black bg-opacity-100 hidden md:w-full "
      //   style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="top-0 mb-auto h-14 bg-[#202020] border-b border-[#181818]">
        <Topbar />
      </div>
      <div className="flex h-full w-full">
        <div className="flex flex-col w-[58%] mx-auto border border-black">
          <div className="top-0 h-full overflow-y-auto flex flex-col justify-end items-center">
            <InfoChat />
          </div>
          <div className="bottom-0 mt-auto w-full pb-5">
            <div className="flex w-full items-center">
              <div className="flex p-3 w-[90%] rounded-2xl bg-[#202020] justify-center items-center">
                <div>
                  <SentimentSatisfiedAltIcon />
                </div>
                <form className="w-full pl-3 flex justify-center items-center">
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
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
                {text.length > 0 ? <SendIcon /> : <KeyboardVoiceIcon />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
