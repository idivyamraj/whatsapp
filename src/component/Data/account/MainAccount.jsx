import React from 'react'
import AccountSection from './AccountSection';
import DisplayAccount from './DisplayAccount';

const MainAccount = () => {
  return (
    <>
      <div className="bg-slate-100 w-full px-2 py-2 flex justify-between items-center ">
        <div className="w-[30%] py-2 px-2">
          <AccountSection/>
        </div>

        <div className="w-[65%] px-2 py-2">
          <DisplayAccount/>
        </div>
      </div>
    </>
  );
}

export default MainAccount