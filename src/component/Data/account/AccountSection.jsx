import React from "react";
import { useState } from "react";
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
  const [account, setAccount] = useState("");

  const handleClick = () => {
    alert("Log Out Successfully");
  };
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

  const findAccount = setting.filter((setting) =>
    setting.name.toLowerCase().includes(account.trim().toLowerCase()),
  );

  return (
    <>
      <div className="px-2">
        <div className="">
          <h1 className="font-semibold text-2xl font-sans">Hustle</h1>
        </div>

        <div className="flex items-center gap-2 mt-7 border border-[#00a884] w-full rounded-full ">
          <span className="px-1">
            <IoSearch />
          </span>
          <input
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full rounded-full py-1 border-none bg-transparent outline-none placeholder:text-[#667781]"
          />

          {/* <input
            type="text"
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            className="border rounded-full px-4 w-full text-sm outline-none m-3 py-3 focus:border-[#00a884]"
            placeholder="Search or start a new chat"
          /> */}
        </div>

        <div className="flex justify-center items-center ">
          <div className="mt-2 flex justify-center items-center rounded-full px-15 py-12 w-[35px] bg-[#d9fdd3]">
            <icon className="text-2xl text-[#008069]">
              <FaUserAlt />
            </icon>
          </div>
        </div>

        <div className="overflow-y-auto max-h-96">
          {findAccount.map((item, index) => (
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

        <div className="flex gap-2 items-center px-5 py-5 text-[#ea0038] cursor-pointer">
          <span className="text-xl">
            <MdOutlineLogout />
          </span>
          <h1 onClick={handleClick} className="text-xl font-semibold">
            Log out
          </h1>
        </div>
      </div>
    </>
  );
};

export default AccountSection;
