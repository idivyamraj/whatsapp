import React, { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { SiMetaai } from "react-icons/si";
import ChatList from "./ChatList";
import DisplayChat from "./DisplayChat";

const MainChat = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  // const handleClearChat = () => {
  //   setSelectedUser(null);
  // };

  return (
    <>
      <div className="flex w-full">
        <div className="border-r h-full w-[50%]">
          <ChatList onSelectUser={setSelectedUser} />
        </div>

        {/* {!seletedUser && (
          <div className="w-full h-full flex items-center justify-center bg-gray-50 overflow-y-auto">
            <div className="flex flex-col items-center gap-6">
              <div className="flex justify-center items-center gap-8">
                <div className="px-5 py-5 rounded-full text-3xl bg-slate-200 cursor-pointer hover:bg-slate-300 transition">
                  <IoDocumentTextOutline />
                </div>

                <div className="px-5 py-5 rounded-full text-3xl bg-slate-200 cursor-pointer hover:bg-slate-300 transition">
                  <IoIosContact />
                </div>

                <div className="px-5 py-5 rounded-full text-3xl bg-slate-200 cursor-pointer hover:bg-slate-300 transition">
                  <SiMetaai />
                </div>
              </div>
            </div>
          </div>
        )} */}

        {!selectedUser && (
          <div className="flex justify-center items-center w-full h-full bg-gray-50 overflow-y-auto">
            <div className="flex flex-col items-center gap-6">
              <div className="flex justify-center items-center gap-10">
                <div className="px-5 py-5 rounded-full bg-gray-200 cursor-pointer text-3xl">
                  <IoDocumentTextOutline />
                </div>

                <div className="px-5 py-5 rounded-full bg-gray-200 cursor-pointer text-3xl">
                  <IoIosContact />
                </div>

                <div className="px-5 py-5 rounded-full bg-gray-200 cursor-pointer text-3xl">
                  <SiMetaai />
                </div>
              </div>
            </div>
          </div>
        )}


        {selectedUser && (
          <div className="w-full h-full relative">
            <DisplayChat user={selectedUser}/>
          </div>
        )}
      </div>
    </>
  );
};

export default MainChat;
