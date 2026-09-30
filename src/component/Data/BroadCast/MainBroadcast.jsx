import React from "react";
import BroadcastList from "./BroadcastList";
import BroadcastDisplay from "./BroadcastDisplay";

const MainBroadcast = () => {
  return (
    <>
      <div className="bg-[#f0f2f5] w-full px-2 py-2 flex justify-between items-center ">
        <div className="w-[30%] py-2 px-2">
          <BroadcastList/>
        </div>

        <div className="w-[65%] px-2 py-2">
          <BroadcastDisplay/>
        </div>
      </div>
    </>
  );
};

export default MainBroadcast;
