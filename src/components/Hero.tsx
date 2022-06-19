import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { GrFilter } from "react-icons/gr";

// components
import SingleAgent from "./SingleAgent";

// images
import initiator from "../assets/initiator.png";
import controller from "../assets/controller.png";
import duelist from "../assets/duelist.png";
import sentinel from "../assets/sentinel.png";

const Hero = () => {
  const agents = useAppSelector((state) => state.agents.data);

  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [initFilter, setInitFilter] = useState<boolean>(false);
  const [sentinelFilter, setSentinelFilter] = useState<boolean>(false);
  const [duelistFilter, setDuelistFilter] = useState<boolean>(false);
  const [controllerFilter, setControllerFilter] = useState<boolean>(false);

  const handleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleInitFilter = () => {
    setInitFilter(true);
    setSentinelFilter(false);
    setDuelistFilter(false);
    setControllerFilter(false);
    setFilterOpen(false);
  };

  const handleSentinelFilter = () => {
    setSentinelFilter(true);
    setInitFilter(false);
    setDuelistFilter(false);
    setControllerFilter(false);
    setFilterOpen(false);
  };

  const handleDuelistFilter = () => {
    setDuelistFilter(true);
    setInitFilter(false);
    setSentinelFilter(false);
    setControllerFilter(false);
    setFilterOpen(false);
  };

  const handleControllerFilter = () => {
    setControllerFilter(true);
    setInitFilter(false);
    setSentinelFilter(false);
    setDuelistFilter(false);
    setFilterOpen(false);
  };

  return (
    <>
      <GrFilter
        className="absolute top-[100px] right-4 cursor-pointer"
        size={30}
        onClick={handleFilter}
      />
      {filterOpen && (
        <div className="bg-white shadow-2xl shadow-black border-black  rounded-xl flex flex-col justify-around items-center p-8 absolute w-full top-[140px] md:w-1/2 md:right-0">
          <h1 className="p-4 font-bold text-center text-2xl">Filter</h1>
          <div className="flex justify-evenly items-center mt-6 rounded-2xl p-4 w-full">
            <img
              src={initiator}
              alt="agentRoleIcon"
              className="w-[50px] bg-black rounded-full cursor-pointer"
              onClick={handleInitFilter}
            />
            <img
              src={sentinel}
              alt="agentRoleIcon"
              className="w-[50px] bg-black rounded-full cursor-pointer"
              onClick={handleSentinelFilter}
            />
            <img
              src={duelist}
              alt="agentRoleIcon"
              className="w-[50px] bg-black rounded-full cursor-pointer"
              onClick={handleDuelistFilter}
            />
            <img
              src={controller}
              alt="agentRoleIcon"
              className="w-[50px] bg-black rounded-full cursor-pointer"
              onClick={handleControllerFilter}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-8 p-8">
        {sentinelFilter || duelistFilter || controllerFilter || initFilter
          ? agents
              .filter((agent) => {
                if (sentinelFilter) {
                  return agent?.role?.displayName === "Sentinel";
                }
                if (duelistFilter) {
                  return agent?.role?.displayName === "Duelist";
                }
                if (controllerFilter) {
                  return agent?.role?.displayName === "Controller";
                }
                if (initFilter) {
                  return agent?.role?.displayName === "Initiator";
                }
              })
              .map((filteredAgent) => (
                <SingleAgent
                  id={filteredAgent.uuid}
                  key={filteredAgent.uuid}
                  name={filteredAgent?.displayName}
                  role={filteredAgent?.role?.displayName}
                  image={filteredAgent?.displayIcon}
                  roleIcon={filteredAgent?.role?.displayIcon}
                  sova={filteredAgent?.isPlayableCharacter}
                />
              ))
          : agents.map((agent) => (
              <SingleAgent
                id={agent.uuid}
                key={agent.uuid}
                name={agent?.displayName}
                role={agent?.role?.displayName}
                image={agent?.displayIcon}
                roleIcon={agent?.role?.displayIcon}
                sova={agent?.isPlayableCharacter}
              />
            ))}
      </div>
    </>
  );
};

export default Hero;
