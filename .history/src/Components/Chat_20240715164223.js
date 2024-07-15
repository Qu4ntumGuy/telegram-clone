import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Chat({ name, profile, color, time, message, chatId }) {
  function formatDateTime(input) {
    const date = new Date(input);

    // Format date1 as "dd/mm/yy"
    const date1 = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });

    // Format d2 as "Month DD"
    const d2 = date.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
    });

    // Format time as "hh:mm"
    const t = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return {
      date1,
      d2,
      t,
    };
  }
  const navigate = useNavigate();
  const chackId = useParams().id;

  const today = new Date();

  const openMessages = () => {
    navigate(`/k/${chatId}`);
  };

  const selected = chatId === chackId;

  return (
    <div
      onClick={openMessages}
      className={`flex w-full p-2 items-center cursor-pointer justify-between ${chatId} bg-violet-400/80 hover:bg-stone-700 hover:bg-opacity-30 rounded-lg`}
    >
      <div
        className={`flex justify-center items-center text-xl font-semibold bg-gradient-to-br from-${color}-400 to-${color}-500 rounded-full w-14 h-14`}
      >
        {profile ? profile : "D"}
      </div>
      <div className="flex flex-col w-[83%]">
        <div className="flex">
          <div className="font-semibold ">
            {name ? name : "Deleted Account"}
          </div>
          <div className="right-0 ml-auto text-xs text-stone-400 font-semibold">
            {formatDateTime(time).date1 > today
              ? formatDateTime(time).t
              : formatDateTime(time).d2}
          </div>
        </div>
        <div className="text-stone-500 w-full justify-between h-7 items-center flex">
          <div className="">
            <span>{name} joined Telegram</span>
          </div>
          <div className="bg-violet-400 text-white text-sm font-semibold flex justify-center items-center min-w-7 h-7 rounded-full">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;