import React from "react";

function Chat({ name, profile, color, time }) {
  const formatDate = (isoDateTime) => {
    const date = new Date(isoDateTime);

    // Options for formatting the date
    const dateOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };

    // Options for formatting the time
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // For 24-hour format
      timeZone: "UTC", // Adjust the time zone if needed
    };

    // Convert to human-readable format
    const humanReadableDate = date.toLocaleDateString("en-GB", dateOptions);
    const humanReadableTime = date.toLocaleTimeString("en-GB", timeOptions);

    return {
      date: humanReadableDate,
      time: humanReadableTime,
    };
  };

  const { date, t } = formatDate(time);
  //   console.log(date, t);

  return (
    <div className="flex w-full p-2 items-center cursor-pointer justify-between hover:bg-stone-700 hover:bg-opacity-30 rounded-lg">
      <div
        className={`flex justify-center items-center text-xl font-semibold bg-gradient-to-br from-red-400 to-red-500 rounded-full w-14 h-14`}
      >
        {profile ? profile : "P"}
      </div>
      <div className="flex flex-col w-[83%]">
        <div className="flex">
          <div className="font-semibold ">{name}</div>
          <div className="right-0 ml-auto text-xs text-stone-400 font-semibold">
            Date/Time
          </div>
        </div>
        <div>Last Message</div>
      </div>
    </div>
  );
}

export default Chat;
