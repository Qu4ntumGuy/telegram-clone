import React from "react";

function Message({ message, name, time }) {
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
    <div className="w-full">
      <div className="max-w-[30rem] flex justify-end items-end my-2">
        <div className="h-11 w-11 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full"></div>
        <div className="flex flex-col bg-[#181818] rounded-xl p-2">
          <div> Name</div>
          <div className="flex">
            <div>
              Message ;slkdjfsdkfk lksdjflk asjdfl sjdfkasd jfj l lkj lkdjlk
              faslkdj{" "}
            </div>
            <div className="text-xs flex justify-end items-end text-stone-500">
              time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
