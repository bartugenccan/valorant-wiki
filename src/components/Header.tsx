import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="w-full bg-black h-[90px]">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full ">
        <h1 className="text-red-500">VALORANT</h1>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <Link to="/">
              <li>Agents</li>
            </Link>
            <Link to="/weapons">
              <li>Weapons</li>
            </Link>
            <Link to="/maps">
              <li>Maps</li>
            </Link>
          </ul>
        </div>

        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {navOpen ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        <div
          className={
            navOpen
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li>Agents</li>
            <li>Weapons</li>
            <li>Maps</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
