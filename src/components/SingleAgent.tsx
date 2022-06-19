import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface SingleAgentProps {
  name: string;
  role: string;
  image: string;
  roleIcon: string;
  id: string;
  sova: boolean;
}

const SingleAgent: React.FC<SingleAgentProps> = ({
  id,
  name,
  role,
  image,
  roleIcon,
  sova,
}) => {
  return (
    <Link to={`/agents/${id}`}>
      <div className="bg-white shadow-2xl shadow-red-100 rounded-xl flex flex-col justify-around items-center p-8">
        <h1 className="p-4 font-bold text-center text-2xl">{name}</h1>
        <img
          src={image}
          alt="icon"
          className="rounded-full w-[80px] md:w-[120px]"
        />

        <div className="bg-red-500 flex justify-evenly items-center mt-6 rounded-2xl text-white p-4">
          <img src={roleIcon} alt="roleIcon" className="w-1/6" />
          <h1 className="font-bold "> {role} </h1>
        </div>
      </div>
    </Link>
  );
};

export default SingleAgent;
