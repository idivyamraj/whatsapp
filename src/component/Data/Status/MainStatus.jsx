import React from 'react'
import StatusList from "./StatusList";
import DisplayStatus from './DisplayStatus';

const MainStatus = () => {
  return (
    <>
      <div className="bg-[#f0f2f5] w-full px-2 py-2 flex justify-between items-center">
        <div className="w-[30%] py-2 px-2">
          <StatusList/>
        </div>

        <div className="w-[65%] px-2 py-2">
          <DisplayStatus />
        </div>
      </div>
    </>
  );
}

export default MainStatus