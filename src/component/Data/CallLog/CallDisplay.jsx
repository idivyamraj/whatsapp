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
            <div className="bg-white text-[#008069] px-5 py-5 rounded-xl cursor-pointer hover:bg-[#e7fce3]">
              <MdOutlineVideoCall />
            </div>

            <div className="bg-white text-[#008069] px-5 py-5 rounded-xl cursor-pointer hover:bg-[#e7fce3]">
              <IoLinkSharp />
            </div>
          </div>

          <div className="flex gap-5 px-5 py-5 text-5xl">
            <div className="bg-white text-[#008069] px-5 py-5 rounded-xl cursor-pointer hover:bg-[#e7fce3]">
              <IoMdKeypad />
            </div>

            <div className="bg-white text-[#008069] px-5 py-5 rounded-xl cursor-pointer hover:bg-[#e7fce3]">
              <SlCalender />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallDisplay;
