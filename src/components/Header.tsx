import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import valorant from "../assets/valorant.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [isAgentsActive, setIsAgentsActive] = useState<boolean>(false);
  const [isWeaponsActive, setIsWeaponsActive] = useState<boolean>(false);
  const [isMapsActive, setIsMapsActive] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleActiveAgents = () => {
    setIsAgentsActive(true);
    setIsWeaponsActive(false);
    setIsMapsActive(false);
    setNavOpen(false);
  };
  const handleActiveWeapons = () => {
    setIsWeaponsActive(true);
    setIsAgentsActive(false);
    setIsMapsActive(false);
    setNavOpen(false);
  };
  const handleActiveMaps = () => {
    setIsMapsActive(true);
    setIsAgentsActive(false);
    setIsWeaponsActive(false);
    setNavOpen(false);
  };

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleHeaderClick = () => {
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    setIsAgentsActive(true);
  }, []);

  return (
    <div className="w-full h-[90px] shadow-2xl border-b-4">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full ">
        <Link to={"/"} onClick={handleHeaderClick}>
          <div className="flex justify-between items-center cursor-pointer">
            <img
              src={valorant}
              alt=""
              className=" bg-transparent md:w-[80px] w-[30px]"
            />
            <h1 id="header" className="text-red-500 md:text-5xl">
              VALORANT
            </h1>
          </div>
        </Link>

        <div className="hidden md:flex">
          <ul className="flex text-black items-center">
            <Link to="/">
              <li
                className={isAgentsActive ? "bg-red-500 text-white" : ""}
                onClick={handleActiveAgents}
              >
                Agents
              </li>
            </Link>
            <Link to="/weapons">
              <li
                className={isWeaponsActive ? "bg-red-500 text-white" : ""}
                onClick={handleActiveWeapons}
              >
                Weapons
              </li>
            </Link>
            <Link to="/maps">
              <li
                className={isMapsActive ? "bg-red-500 text-white" : ""}
                onClick={handleActiveMaps}
              >
                Maps
              </li>
            </Link>
          </ul>
        </div>

        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div
          className={
            navOpen
              ? "w-full bg-white text-white absolute top-[90px] left-0 flex justify-center text-center shadow-xl rounded-xl p-4"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <Link to="/">
              <li
                className={isAgentsActive ? "bg-red-500 text-white" : ""}
                onClick={handleActiveAgents}
              >
                Agents
              </li>
            </Link>
            <Link to="/weapons">
              <li
                className={isWeaponsActive ? "bg-red-500 text-white" : ""}
                onClick={handleActiveWeapons}
              >
                Weapons
              </li>
            </Link>
            <Link to="/maps">
              <li
                className={isMapsActive ? "bg-red-500 text-white" : ""}
                onClick={handleActiveMaps}
              >
                Maps
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
