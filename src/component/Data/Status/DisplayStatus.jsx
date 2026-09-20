import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const DisplayStatus = () => {
  return (
    <>
      <div className="items-center">
        <div className="flex justify-center items-center text-5xl">
          <FaRegCirclePlay />
        </div>

        <div className="text-center">
          <p className='font-semibold text-3xl'>Share Status</p>
          <p className="text-slate-500">Share text, videos, and photos that disappear after 24 hours. </p>
        </div>
      </div>
    </>
  );
};

export default DisplayStatus;
