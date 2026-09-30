import React from 'react'
import { BsBroadcast } from "react-icons/bs";

const BroadcastDisplay = () => {
  return (
    <>
      <div className="text-center">
        <div className="text-5xl flex justify-center items-center">
          <BsBroadcast />
        </div>

        <div>
          <p className="font-semibold text-3xl">Discover Channels</p>
          <p className="font-semibold text-xl text-[#667781]">Entertainment, sports, news, lifestyle, people and more. Follow the channels that interst you</p>
        </div>

      </div>
    </>
  );
}

export default BroadcastDisplay