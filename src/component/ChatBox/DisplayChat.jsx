import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { LuLink } from "react-icons/lu";
import { CgFileAdd } from "react-icons/cg";

const DisplayChat = ({ user }) => {
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name || "");
  };

  const Message = [
    {
      id: 1,
      text: "Hello",
      sender: "other",
    },
  ];

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: "message",
      sender: "user",
    };

    setMessage((prev) => [...prev, newMessage]);

    setMessage("");

    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
      };

      setTimeout(() => {
        const reply = {
          id: Date.now() + 1,
          text: "Okay",
          sender: "Other",
        };
        setMessage((prev) => [...prev, reply]);
      }, 1000);
    });
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b border-[#e9edef] px-5 py-4 flex justify-between items-center gap-2 w-full bg-[#f0f2f5]">
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
              <span className="text-sm font-semibold font-sans text-[#008069]">
                {user.mode}
              </span>
            </div>
          </div>

          <div>
            <button className="flex gap-5 cursor-pointer px-5 py-2 text-xl">
              <Link to="/videoCall" state={{ user }}>
                <FaVideo />
              </Link>

              <Link to="/VoiceCall" state={{ user }}>
                <IoMdCall />
              </Link>
              <IoSearch />
              <IoMdMenu />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex gap-3 bg-[#efeae2]">
          <img
            className="h-5 rounded-full object-cover"
            src={user.img}
            alt=""
          />
          <div className="bg-white px-3 py-2 w-fit max-w-xs rounded-lg">
            <p className="text-[#111b21]">{user.msg}</p>
          </div>
        </div>

        <div className="border border-[#e9edef] bg-white rounded-full mt-120 ml-5 flex justify-between items-center">
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
              className="flex gap-3 px-4 text-[#54656f] text-2xl cursor-pointer relative right-1"
            >
              <LuLink />
              <CgFileAdd />
            </button>

            {fileName && (
              <span className="max-w-32 truncate text-sm text-[#667781]">
                {fileName}
              </span>
            )}
            <div className="flex flex-col gap-2">
              {Message.map((msg) => (
                <div
                  key={msg.id}
                  className={`px-3 py-2 rounded-lg max-w-xs ${
                    msg.sender === "user"
                      ? "bg-green-500 text-white self-end"
                      : "bg-gray-200 text-black self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              className="px-2 py-4 w-full rounded-full border-none outline-none text-xl"
              type="text"
              placeholder="Type a message"
            />
          </div>

          <div className="px-4 py-2">
            <button
              onClick={handleSendMessage}
              className="text-xl rounded-full px-3 py-2 cursor-pointer bg-[#00a884] text-white hover:bg-[#008f72] border border-transparent"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayChat;
