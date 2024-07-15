import React from "react";

function Message({ text, sender, time, profile }) {
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

  return (
    <div className={`w-full flex ${sender === null ? "" : ""}`}>
      {sender === null ? (
        <div className="max-w-[30rem] flex justify-end items-end my-2">
          <div className="flex flex-col bg-[#181818] mr-2 rounded-xl p-2">
            <div className="text-yellow-500">
              {" "}
              {sender ? sender : "Deleted Account"}
            </div>
            <div className="flex justify-between">
              <div>{text}</div>
              <div className="text-xs flex justify-end items-end text-stone-500">
                {formatDateTime(time).t}
              </div>
            </div>
          </div>
          <div className="!h-11 !w-11 bg-gradient-to-br from-yellow-400 flex items-center justify-center font-semibold to-yellow-500 rounded-full">
            {profile ? profile : "D"}
          </div>
        </div>
      ) : (
        <div className="max-w-[30rem] flex justify-start items-end my-2">
          <div className="!h-11 !w-11 bg-gradient-to-br from-yellow-400 flex items-center justify-center font-semibold to-yellow-500 rounded-full">
            {profile ? profile : "D"}
          </div>
          <div className="flex flex-col w-96 bg-[#181818] ml-2 rounded-xl p-2">
            <div className="text-yellow-500">
              {" "}
              {sender ? sender : "Deleted Account"}
            </div>
            <div className="flex justify-between">
              <div>{text}</div>
              <div className="text-xs flex justify-end items-end text-stone-500">
                {formatDateTime(time).t}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
