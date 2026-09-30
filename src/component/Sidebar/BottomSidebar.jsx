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
      <div className="flex flex-col items-center gap-2 pb-2 text-[#54656f]">
        {url.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="p-2 text-2xl hover:text-[#008069] hover:bg-[#f0f2f5] rounded-lg cursor-pointer"
          >
            <p>{item.link}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default BottomSidebar