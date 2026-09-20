import React from "react";
import { IoKeypad } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { RiVideoUploadFill } from "react-icons/ri";
import { RiVideoDownloadFill } from "react-icons/ri";
import { MdMissedVideoCall } from "react-icons/md";
import { MdOutlineRecordVoiceOver } from "react-icons/md";

const CallList = () => {
  const list = [
    {
      name: "Rohan",
      img: "Nature.png",
      timeStamp: "8:29pm",
      missed: "missed video call",
      missedvidecall: <MdMissedVideoCall />,
    },

    {
      name: "Narendra Modi",
      img: "DP6.png",
      timeStamp: "8:29pm",
      missed: "missed video call",
      missedvidecall: <MdMissedVideoCall />,
    },

    {
      name: "Owaisi KYC",
      img: "SunsetDP.png",
      timeStamp: "8:29pm",
      missed: "missed voice call",
      missedvidecall: <MdOutlineRecordVoiceOver />,
    },

    {
      name: "Roshini",
      img: "DP1.png",
      timeStamp: "8:29pm",
      missed: "missed video call",
      missedvidecall: <MdMissedVideoCall />,
    },

    {
      name: "Roshini",
      img: "DP1.png",
      timeStamp: "8:29pm",
      missed: "missed video call",
      missedvidecall: <MdMissedVideoCall />,
    },

    {
      name: "Roshini",
      img: "DP1.png",
      timeStamp: "8:29pm",
      missed: "video call",
      missedvidecall: <RiVideoUploadFill />,
    },

    {
      name: "Roshini",
      img: "DP1.png",
      timeStamp: "8:29pm",
      missed: "missed video call",
      missedvidecall: <MdMissedVideoCall />,
    },

    {
      name: "Roshini",
      img: "DP1.png",
      timeStamp: "8:29pm",
      missed: "missed video call",
      missedvidecall: <MdMissedVideoCall />,
    },
  ];
  return (
    <>
      <div className="border py-2 px-2 rounded-lg">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="font-semibold text-2xl">
            <p>Calls</p>
          </div>

          <div className="flex gap-5 text-2xl">
            <p>
              <IoKeypad />
            </p>

            <p>
              <MdAddIcCall />
            </p>
          </div>
        </div>
        <div className="border border-slate-200 bg-slate-300 w-full mt-2 rounded-full flex justify-center items-center">
          <span className="text-slate-500 px-2">
            <IoSearch />
          </span>
          <input
            className="w-full rounded-full border-none outline-none py-2"
            type="text"
            placeholder="Search name, number, @Username..."
          />
        </div>

        <div className="mt-5">
          <p className="font-semibold text-xl px-4">Favourite</p>
        </div>

        <div className="flex text-center text-2xl mt-5">
          <p className="flex justify-center items-center gap-3 px-4">
            <icon className="text-white bg-green-800 px-3 py-3 rounded-full">
              <IoPersonAddSharp />
            </icon>
            <h2 className="text-center">Add Favourite</h2>
          </p>
        </div>

        <div className="px-4 mt-4">
          <h2 className="text-2xl font-semibold">Recent</h2>
        </div>

        {/* Call List Through Array */}

        <div>
          {list.map((item, index) => (
            <div
              key={index}
              className="hover:bg-gray-300 rounded-md overflow-y-auto"
            >
              <div className="flex mt-3 font-semibold justify-between items-center cursor-pointer">
                <div className="flex jusify-between items-center">
                  <div>
                    <img
                      className="h-12 rounded-full m-2"
                      src={item.img}
                      alt=""
                    />
                  </div>

                  <div className="">
                    <p className="overflow-y-auto">{item.name}</p>
                    <p className="text-red-800">{item.videooutgoing}</p>
                    <p className="text-red-800">
                      <div className="flex gap-1 items-center">
                        <p className="text-md text-center">{item.missed}</p>
                        <p className="text-md text-center">{item.videologo}</p>
                        <p className="text-md text-center">
                          {item.videoincoming}
                        </p>
                        <p className="text-md text-center">
                          {item.missedvidecall}
                        </p>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="px-5">{item.timeStamp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CallList;
