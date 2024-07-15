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
import Message from "../../Components/Message";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  //
  const image =
    "https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/pattern_02-150x150.png";

  const chatId = useParams().id;

  console.log(chatId);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
      );
      //   console.log(res);
      setMessages(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [chatId]);

  function formatString(str) {
    str = str.trim();
    const words = str.split(/\s+/);
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    } else if (words.length === 2) {
      return (
        words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase()
      );
    } else {
      return (
        words[0].charAt(0).toUpperCase() +
        words[words.length - 1].charAt(0).toUpperCase()
      );
    }
  }

  return (
    <div
      className="md:flex flex-col justify-center bg-cover h-screen overflow-hidden bg-black bg-opacity-100 hidden md:w-full "
      //   style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="top-0 sticky mb-auto h-14 bg-[#202020] border-b border-[#181818]">
        <Topbar />
      </div>
      <div className="flex w-full ">
        <div className="flex flex-col w-[58%] h-full mx-auto border border-black">
          <div className="flex h-full overflow-y-scroll flex-col justify-end items-center">
            {messages.map((message) => (
              <Message
                key={message.id}
                text={message.message}
                time={message.created_at}
                sender={message.sender.name}
                profile={formatString(String(message.sender.name))}
              />
            ))}
            {/* <InfoChat />
            <Message /> */}
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
