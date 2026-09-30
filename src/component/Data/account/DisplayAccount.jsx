import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { SiMetaai } from "react-icons/si";

const DisplayAccount = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center w-full h-full bg-[#efeae2] overflow-y-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center items-center gap-10">
              <div className="px-5 py-5 rounded-full bg-white text-[#008069] cursor-pointer text-3xl">
                <IoDocumentTextOutline />
              </div>

              <div className="px-5 py-5 rounded-full bg-white text-[#008069] cursor-pointer text-3xl">
                <IoIosContact />
              </div>

              <div className="px-5 py-5 rounded-full bg-white text-[#008069] cursor-pointer text-3xl">
                <SiMetaai />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayAccount;
