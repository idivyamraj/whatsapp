import React from "react";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoLinkSharp } from "react-icons/io5";
import { IoMdKeypad } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const CallDisplay = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="">
          <div className="px-5 py-5 flex gap-5 text-5xl">
            <div className="bg-slate-200 px-5 py-5 rounded-xl cursor-pointer hover:bg-slate-300">
              <MdOutlineVideoCall />
            </div>

            <div className="bg-slate-200 px-5 py-5 rounded-xl cursor-pointer hover:bg-slate-300">
              <IoLinkSharp />
            </div>
          </div>

          <div className="flex gap-5 px-5 py-5 text-5xl">
            <div className="bg-slate-200 px-5 py-5 rounded-xl cursor-pointer hover:bg-slate-300">
              <IoMdKeypad />
            </div>

            <div className="bg-slate-200 px-5 py-5 rounded-xl  cursor-pointer hover:bg-slate-300">
              <SlCalender />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallDisplay;
