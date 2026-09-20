import React from "react";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { MdOutlineCall } from "react-icons/md";
import { VscPlayCircle } from "react-icons/vsc";
import { BsBroadcast } from "react-icons/bs";
import { Link } from "react-router";

const TopSidebar = ({ onCallLog }) => {
  const links = [
    {
      id: "Chat",
      lnk: <BsFillChatSquareTextFill />,
      path: "/",
    },

    {
      id: "call",
      lnk: <MdOutlineCall />,
      path: "/calls",
    },

    {
      id: "play",
      lnk: <VscPlayCircle />,
      path: "/Play",
    },

    {
      id: "Broadcast",
      lnk: <BsBroadcast />,
      path: "/Broadcast",
    },
  ];
  return (
    <>
      <div className="flex w-full flex-col items-center px-2 py-4">
        <div className="flex flex-col items-center space-y-4 text-2xl">
          {links.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="p-2 text-gray-700 hover:text-blackhover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              {item.lnk}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopSidebar;
