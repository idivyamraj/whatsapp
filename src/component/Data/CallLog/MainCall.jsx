import React from 'react'
import CallList from './CallList'
import CallDisplay from './CallDisplay'

const MainCall = () => {
  return (
    <>
      <div className="bg-[#f0f2f5] w-full px-2 py-2 flex justify-between items-center ">
        <div className="w-[30%] py-2 px-2">
          <CallList />
        </div>

        <div className="w-[65%] px-2 py-2">
          <CallDisplay />
        </div>
      </div>
    </>
  );
}

export default MainCall