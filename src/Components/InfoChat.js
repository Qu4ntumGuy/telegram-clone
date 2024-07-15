import React from "react";

function InfoChat() {
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
    <div className="flex w-full justify-center">
      <div className="p-1 px-2 rounded-full text-sm font-semibold my-1 bg-opacity-30 bg-purple-500">
        August 10, 2021
      </div>
    </div>
  );
}

export default InfoChat;
