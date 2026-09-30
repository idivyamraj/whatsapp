import React from 'react'
import TopSidebar from './TopSidebar'
import BottomSidebar from './BottomSidebar'

const MainSidebar = () => {

  return (
    <div className="flex h-full w-16 flex-col items-center justify-between border-r border-[#e9edef] bg-white py-1">
      <TopSidebar/>
      <BottomSidebar />
    </div>
  );
}

export default MainSidebar