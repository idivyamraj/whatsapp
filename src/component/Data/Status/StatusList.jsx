import React from "react";
import { useState, useRef } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import {CircleFadingPlus} from 'lucide-react';

const StatusList = () => {

  const handleClick = () => (
    alert("File doesn't Exist")
  )

  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name || "");
  }
  const Profile = [
    {
      profile: "H",
      name: "My Status",
      para: "Click to add status update",
      icons: <CircleFadingPlus/>,
    },
  ];

  const status = [
    {
      id: 101,
      img: "DP1.png",
      name: "Roshni",
      timeStamp: "Today at 2:49 pm",
    },

    {
      id: 102,
      img: "DP2.png",
      name: "Elon Bhai",
      timeStamp: "Today at 2:49 pm",
    },

    {
      id: 103,
      img: "DP3.png",
      name: "Ambani Padosi",
      timeStamp: "Today at 2:49 pm",
    },

    {
      id: 104,
      img: "DP4.png",
      name: "Owaisi KYC",
      timeStamp: "Today at 2:49 pm",
    },

    {
      id: 105,
      img: "DP5.png",
      name: "Rahul Gandhi",
      timeStamp: "Today at 2:49 pm",
    },

    {
      id: 106,
      img: "DP6.png",
      name: "Narendra Modi",
      timeStamp: "Today at 2:49 pm",
    },

    {
      id: 107,
      img: "H",
      name: "Rencho",
      timeStamp: "Today at 2:49 pm",
    },

    {
      id: 108,
      img: "S",
      name: "Reyaan",
      timeStamp: "Today at 2:49 pm",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center text-2xl">
        <div>
          <h2 className="font-semibold">Status</h2>
        </div>

        <div className="flex gap-5">
          <CiMenuKebab />
          <CiCirclePlus />
        </div>
      </div>

      <div>
        <img className="rounded-full bg-[#e9edef]" src="" alt="" />
        {Profile.map((item, index) => (
          <div key={index}>
            <div className="flex gap-2 px- py-2 mt-5 items-center">
              <div className="rounded-full h-10 w-10 text-center py-2 px-2 bg-[#d9fdd3] text-[#008069] font-semibold cursor-pointer">
                {item.profile}
              </div>

              <div className="w-full">
                <h1 className="w-full font-semibold">{item.name}</h1>
                <span className="">{item.para}</span>
              </div>

              <div>

                <input ref={fileInputRef} onChange={handleFileChange} className="hidden" type="file" />
                <button className="flex gap-3 px-4 text-2xl cursor-pointer relative right-1" type="button"  onClick={() => fileInputRef.current?.click()}>
                    {item.icons}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1 className="font-semibold text-xl px-1 mt-5">Recent</h1>
      </div>

      <div className="mt-4 overflow-y-auto max-h-125 border border-[#e9edef] rounded-lg">
        {status.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 items-center m-3 cursor-pointer hover:bg-[#f0f2f5] px-3 py-2 rounded-lg"
          >
            <div>
              <img
                className="h-15 w-15 rounded-full bg-[#d9fdd3]"
                src={item.img}
                alt={item.img}
              />
            </div>

            <div className="">
              <div className="">
                <h1 className="font-semibold text-lg">{item.name}</h1>
              </div>

              <div className="">
                <p className="text-lg">{item.timeStamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatusList;
