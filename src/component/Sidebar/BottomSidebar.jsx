import React from 'react'
import { MdOutlinePhotoAlbum } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router';


const BottomSidebar = () => {

  const url = [
    {
      link: <MdOutlinePhotoAlbum />,
      path: "/gallery",
    },

    {
      link: <FaRegUserCircle />,
      path: "/account",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center gap-2 pb-2">
        {url.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="p-2 text-2xl text-gray-700 hover:text-black hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <p>{item.link}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default BottomSidebar