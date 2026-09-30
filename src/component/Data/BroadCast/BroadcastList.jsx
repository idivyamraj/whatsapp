import React from "react";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

const BroadcastList = () => {
  const [News, setNews] = useState("");
  // const [Suggest, setSuggest] = useState("");

  const news = [
    {
      img: "TOI.png",
      name: "The Times of India",
      msg: "What far-right party AfD's Victory in Germany",
      timestamp: "10:43 pm",
    },

    {
      img: "TestBook.png",
      name: "TestBook",
      msg: "What far-right party AfD's Victory in Germany",
      timestamp: "10:43 pm",
    },

    {
      img: "Vocabulary.png",
      name: "Daily Vocabulary",
      msg: "What far-right party AfD's Victory in Germany",
      timestamp: "10:43 pm",
    },

    {
      img: "Python.png",
      name: "Python Programming",
      msg: "What far-right party AfD's Victory in Germany",
      timestamp: "10:43 pm",
    },

    {
      img: "RCB.png",
      name: "Royal Challengers Bangalore",
      msg: "What far-right party AfD's Victory in Germany",
      timestamp: "10:43 pm",
    },
  ];

  const suggest = [
    {
      img: "Fifa.png",
      name: "FIFA World Cup",
      msg: "What far-right party AfD's Victory in Germany",
      follow: "Follow",
    },

    {
      img: "RCB.png",
      name: "Royal Challengers Banglore",
      msg: "What far-right party AfD's Victory in Germany",
      follow: "Follow",
    },

    {
      img: "BCCI.png",
      name: "Board of Control for Cricket in India",
      msg: "What far-right party AfD's Victory in Germany",
      follow: "Follow",
    },
  ];

  const Channel = news.filter((news) =>
    news.name.toLowerCase().includes(News.trim().toLowerCase()),
  );

  return (
    <>
      <div className="flex justify-between items-center px-5 py-3">
        <div className="text-2xl font-semibold">
          <p>Channel</p>
        </div>

        <div className="text-2xl">
          <menu>
            <CiCirclePlus />
          </menu>
        </div>
      </div>

      <div className="bg-[#f0f2f5] w-full rounded-full mt-5 flex items-center">
        <span className="px-2">
          <IoSearch />
        </span>
        <input
          value={News}
          onChange={(e) => setNews(e.target.value)}
          className="w-full rounded-full py-2 border-none bg-transparent outline-none placeholder:text-[#667781]"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="">
        {Channel.map((item, index) => (
          <div
            key={index}
            className="flex gap-1 justify-between items-center px-2 mt-2 cursor-pointer hover:bg-[#f0f2f5] rounded-2xl"
          >
            <div className="flex gap-1 items-center">
              <div className="">
                <img className="h-10 w-10 rounded-full" src={item.img} alt="" />
              </div>

              <div className="px-3 items-center">
                <p className="font-semibold">{item.name}</p>
                <span className="text-sm">{item.msg}</span>
              </div>
            </div>

            <div className="w-[20%]">
              <h1>{item.timestamp}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <p className="text-lg font-semibold text-[#667781] px-4">
          Find Channel to follow
        </p>
      </div>

      <div className="">
        {suggest.map((item, index) => (
          <div key={index} className="flex gap-2 items-center py-3">
            <div>
              <img
                className="h-10 w-10 border-none outline-none rounded-full"
                src={item.img}
                alt=""
              />
            </div>

            <div>
              <h1 className="text-md font-semibold">{item.name}</h1>
              <span>{item.msg}</span>
            </div>

            <div>
              <h1 className="text-md text-[#008069] font-semibold">
                {item.follow}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BroadcastList;
