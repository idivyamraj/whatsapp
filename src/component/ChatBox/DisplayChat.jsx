import React, { useRef, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { LuLink } from "react-icons/lu";
import { CgFileAdd } from "react-icons/cg";

const DisplayChat = ({ user }) => {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name || "");
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="border-b px-5 py-4 flex justify-between items-center gap-2 w-full bg-rose-200">
          <div className="flex gap-2 items-center">
            <div>
              <img
                className="h-10 rounded-full object-cover"
                src={user.img}
                alt=""
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <span className="text-sm font-semibold font-sans text-green-600">
                {user.mode}
              </span>
            </div>
          </div>

          <div>
            <button className="flex gap-5 cursor-pointer px-5 py-2 text-xl">
              <FaVideo />
              <IoMdCall />
              <IoSearch />
              <IoMdMenu />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex gap-3">
          <img
            className="h-5 rounded-full object-cover"
            src={user.img}
            alt=""
          />
          <div className="bg-blue-300 px-3 py-2 w-fit max-w-xs rounded-lg">
            <p className="text-gray-700">{user.msg}</p>
          </div>
        </div>

        <div className="border rounded-full mt-120 ml-5 flex justify-between items-center">
          <div className="flex gap-2 items-center w-full relative">
            <input
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              type="file"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              aria-label="Attach a file"
              className="flex gap-3 px-4 text-blue-500 text-2xl cursor-pointer relative right-1"
            >
              <LuLink />
              <CgFileAdd />
            </button>
            {fileName && (
              <span className="max-w-32 truncate text-sm text-gray-600">
                {fileName}
              </span>
            )}
            <input
              className="px-2 py-4 w-full rounded-full border-none outline-none text-xl"
              type="text"
              placeholder="Type a message"
            />
          </div>

          <div className="px-4 py-2">
            <button className="text-xl rounded-full px-3 py-2 cursor-pointer hover:bg-blue-400 hover:text-white border">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayChat;
