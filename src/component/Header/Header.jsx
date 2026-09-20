import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="self-start flex items-center text-green-500 text-2xl font-semibold">
        <span className="px-1 m-2"><FaWhatsapp/></span>
        <p className="py-2">WhatsApp</p>
      </div>
    </>
  );
}

export default Header