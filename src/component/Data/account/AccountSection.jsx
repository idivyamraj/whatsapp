import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { RiChatSmile2Line } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegKeyboard } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { MdOutlineLogout } from "react-icons/md";

const AccountSection = () => {
  const setting = [
    {
      name: "General",
      msg: "Startup and Close",
      icon: <MdComputer />,
    },

    {
      name: "Profile",
      msg: "Name, Profile picture, username",
      icon: <FaRegUserCircle />,
    },

    {
      name: "Account",
      msg: "Security notifications, account info",
      icon: <MdKey />,
    },

    {
      name: "Privacy",
      msg: "Blocked contacts, disappearing messages",
      icon: <IoIosLock />,
    },

    {
      name: "Chats",
      msg: "Theme, wallpaper, chat setting",
      icon: <RiChatSmile2Line />,
    },

    {
      name: "Video & Voice",
      msg: "Camera, microphone & Speakers",
      icon: <IoVideocamOutline />,
    },

    {
      name: "Notification",
      msg: "Message, Group, Sounds",
      icon: <IoMdNotificationsOutline />,
    },

    {
      name: "Keyboard Shortcuts",
      msg: "Quicks Action",
      icon: <FaRegKeyboard />,
    },

    {
      name: "Help and Feedback",
      msg: "Help center, Contacts us, privacy policy",
      icon: <GoQuestion />,
    },
  ];
  return (
    <>
      <div className="px-2">
        <div className="">
          <h1 className="font-semibold text-2xl font-sans">Hustle</h1>
        </div>

        <div className="flex items-center gap-2 mt-7 border border-green-700 w-full rounded-full ">
          <span className="px-1">
            <IoSearch />
          </span>
          <input
            className="w-full rounded-full py-1"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="flex justify-center items-center ">
          <div className="mt-2 flex justify-center items-center rounded-full px-15 py-12 w-[35px] bg-pink-200">
            <icon className="text-2xl text-red-900">
              <FaUserAlt />
            </icon>
          </div>
        </div>

        <div className="overflow-y-auto max-h-96">
          {setting.map((item, index) => (
            <div key={index}>
              <div className="cursor-pointer flex gap-5 m-2 px-3 py-3">
                <div className="flex items-center">
                  <p className="text-2xl">{item.icon}</p>
                </div>

                <div className="pointer-cursor">
                  <h1 className="text-xl font-semibold">{item.name}</h1>
                  <span>{item.msg}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center px-5 py-5 text-red-600 cursor-pointer">
          <span className="text-xl">
            <MdOutlineLogout />
          </span>
          <h1 className="text-xl font-semibold">Log out</h1>
        </div>
      </div>
    </>
  );
};

export default AccountSection;
