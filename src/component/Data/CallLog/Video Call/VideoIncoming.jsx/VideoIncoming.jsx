import React from "react";
import {
  MessageCircleCheck,
  VideoOff,
  Video,
  MailOpen,
} from "lucide-react";

const VideoIncoming = ({ user }) => {
  return (
    <>
      <div className="h-180 w-[50%] flex justify-center items-center ml-90 bg-[#f0f2f5] rounded-md">
        <div>
          <h1 className="px-5 py-2 text-3xl">{user?.name}</h1>
          <icons className="flex gap-3 font-semibold">
            <MessageCircleCheck /> <span> +91 92978 *****</span>
          </icons>
          <img className="h-40 w-40 rounded-full " src={user?.img} alt="" />

          <div className="mt-5 py-2 px-3 border border-[#e9edef] rounded-full bg-[#54656f] text-white">
            <icons className="flex gap-3">
              <VideoOff />
              <span className="font-semibold">Turn off your Video</span>
            </icons>
          </div>

          <div className="flex justify-between items-center pt-70 gap-5">
            <icons className="text-[#ea0038] items-center">
              <VideoOff />
              <p>Decline</p>
            </icons>
            <icons className="text-[#008069]">
              <Video />
              <p>Accept</p>
            </icons>
            <icons className="text-[#54656f]">
              <MailOpen />
              <p>Message</p>
            </icons>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoIncoming;
