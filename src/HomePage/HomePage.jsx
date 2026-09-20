import React from "react";
import MainSidebar from "../component/Sidebar/MainSidebar";
import { Route, Routes } from "react-router";

import MainChat from "../component/ChatBox/MainChat";
import MainCall from "../component/Data/CallLog/MainCall";
import MainStatus from "../component/Data/Status/MainStatus";
import MainBroadcast from "../component/Data/BroadCast/MainBroadcast";
import MainAccount from "../component/Data/account/MainAccount";


const HomePage = () => {
  return (
    <div className="flex h-full min-h-0 w-full">
      <div className="w-16 shrink-0">
        <MainSidebar />
      </div>
      <div className="flex-1 min-w-0">
        <Routes>
          <Route path="/" element={<MainChat />} />
          <Route path="/calls" element={<MainCall/>} />
          <Route path="/play" element={<MainStatus/>} />
          <Route path="/Broadcast" element={<MainBroadcast/>}/>
          <Route path="/account" element={<MainAccount/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
