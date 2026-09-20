import React from "react";
import { RiContactsBook3Fill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";

const ChatList = ({ onSelectUser }) => {
  const navbutton = [
    {
      button: "All",
    },

    {
      button: "Unread",
    },

    {
      button: "Favourites",
    },
  ];

  const chatbar = [
    {
      id: "101",
      img: "SunsetDP.png",
      name: "+91 9297817475 (You)",
      msg: "Hello",
      time: "6.15 pm",
      pdf: "",
    },

    {
      id: "102",
      img: "Nature.png",
      name: "Rohan",
      mode: "online",
      msg: "Hello",
      time: "6.15 pm",
    },

    {
      id: "103",
      img: "DP1.png",
      name: "Roshni",
      mode: "Online",
      msg: "Hello",
      time: "6.15 pm",
    },

    {
      id: "104",
      img: "DP2.png",
      name: "Elon Bhai",
      mode: "recording...",
      msg: " Ownership Request? of 'X' ",
      time: "6.15 pm",
    },

    {
      id: "105",
      img: "DP3.png",
      name: "Ambani Padosi",
      mode: "typing...",
      msg: "Sent You Rs.2Cr",
      time: "6.15 pm",
    },

    {
      id: "106",
      img: "DP4.png",
      name: "Owaisi KYC",
      mode: "online",
      msg: "Ladakh Aapke liye Divyam Sir..",
      time: "6.15 pm",
    },

    {
      id: "107",
      img: "DP5.png",
      name: "Rahul Gandhi",
      mode: "online",
      msg: "Meeting Karna Hai Sir.?",
      time: "6.15 pm",
    },

    {
      id: "108",
      img: "DP6.png",
      name: "Narendra Modi",
      mode: "online",
      msg: "Hello Divyam Sir! ",
      time: "6.15 pm",
    },

    {
      id: "109",
      img: "DP5.png",
      name: "Shantanu Bhaskar",
      msg: "Hello",
      mode: "online",
      time: "6.15 pm",
    },

    {
      id: "110",
      img: "DP1.png",
      name: "Shantanu Bhaskar",
      mode: "online",
      msg: "Hello",
      time: "6.15 pm",
    },

    {
      id: "111",
      img: "DP6.png",
      name: "Shantanu Bhaskar",
      mode: "online",
      msg: "Hello",
      time: "6.15 pm",
    },

    {
      id: "112",
      img: "DP4.png",
      name: "Shantanu Bhaskar",
      mode: "online",
      msg: "Hello",
      time: "6.15 pm",
    },

    {
      id: "113",
      img: "DP2.png",
      name: "Shantanu Bhaskar",
      mode: "online",
      msg: "Hello",
      time: "6.15 pm",
    },

    {
      id: "113",
      img: "GroupImages549.png",
      name: "ChatterBox",
      mode: "online",
      msg: "Hello",
      time: "6.15 pm",
    },
  ];
  return (
    <>
      <div className="bg-white h-full flex flex-col">
        <div className="p-4">
          <div className="flex justify-between items-center gap-2 w-full">
            <h1 className="text-2xl font-semibold">Chats</h1>

            <div className="flex gap-3 text-xl cursor-pointer">
              <button className="px-5 flex gap-2 cursor-pointer">
                <CiMenuKebab />
                <RiContactsBook3Fill />
              </button>
            </div>
          </div>

          <input
            className="border rounded-full px-4 w-full text-sm outline-none m-3 py-3 focus:border-green-500"
            type="text"
            placeholder="Search or start a new chat"
          />
        </div>

        <div className="flex gap-5 justify-evenly items-center bg-white px-5">
          {navbutton.map((item, index) => (
            <div key={index}>
              <div>
                <button className="px-4 py-1 mb-2 border rounded-full hover:bg-green-700 cursor-pointer hover:text-white">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[550px] overflow-y-auto">
          {chatbar.map((item, index) => (
            <div
              key={index}
              onClick={() => onSelectUser(item)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
            >
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={item.img}
                alt=""
              />

              <div className="flex justify-between items-start w-full min-w-0 ">
                <div className="px-3">
                  <p className="font-medium text-gray-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">{item.msg}</p>
                </div>

                <div className="text-xs text-gray-400 ml-2 shrink-0 ">
                  <p>{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatList;
