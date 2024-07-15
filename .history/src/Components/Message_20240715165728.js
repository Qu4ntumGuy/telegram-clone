import React from "react";

function Message() {
  return (
    <div className="w-full">
      <div className="max-w-[30rem] flex justify-end items-end">
        <div className="h-11 w-11 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full"></div>
        <div className="flex flex-col bg-[#181818]">
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
