import React from 'react'
import {
  Minimize2,
  LockKeyhole,
  UserRoundPlus,
  Volume2,
  Video,
  MicOff,
  Ellipsis,
  MonitorUp,
  PhoneOff,
} from "lucide-react";

const VoiceCall = ({user}) => {
  return (
    <div className="w-[40%] m-auto mt-5 py-3 px-3 bg-[#f0f2f5] rounded-2xl">
      <div className="flex justify-between items-center px-5 py-3">
        <icons className="bg-white text-[#54656f] rounded-full px-3 py-3">
          <Minimize2 />
        </icons>
        <div className="text-center">
          <h1 className="font-semibold text-xl">{user?.name}</h1>
          <p className="flex gap-3">
            <span>
              <LockKeyhole />
            </span>
            End-to-end encrypted
          </p>
        </div>
        <icons className="bg-white text-[#54656f] rounded-full px-3 py-3">
          <UserRoundPlus />
        </icons>
      </div>

      <div className="flex justify-center py-30">
        <img className="rounded-full h-40 w-40" src={user?.img} alt="" />
      </div>

      <div className="w-[60%] items-center m-auto px-3 py-8">
        <div className="flex gap-18 justify-center items-center py-4">
          <div className="text-white bg-[#54656f] px-6 py-3 rounded-full  ">
            <Volume2 />
            <p>Speaker</p>
          </div>
          <div className="text-white bg-[#54656f] px-6 py-3 rounded-full  ">
            <Video />
            <p>Video</p>
          </div>
          <div className="text-white bg-[#54656f] px-6 py-3 rounded-full  ">
            <MicOff />
            <p>Mute</p>
          </div>
        </div>

        <div className="flex gap-18 justify-center items-center py-4">
          <div className="text-white bg-[#54656f] px-6 py-3 rounded-full  ">
            <Ellipsis className="items-center" />
            <p>More</p>
          </div>
          <div className="text-white bg-[#54656f] px-6 py-3 rounded-full">
            <MonitorUp className=""/>
            <p>Share</p>
          </div>
          <div className="text-white bg-[#ea0038] px-6 py-2 rounded-full">
            <PhoneOff />
            <p>End</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoiceCall