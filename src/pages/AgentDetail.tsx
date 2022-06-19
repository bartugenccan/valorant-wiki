import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router";

// redux
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSelectedAgent } from "../features/agentsSlice";

const AgentDetail = () => {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const singleAgent = useAppSelector((state) => state.agents.singleAgent);

  useEffect(() => {
    if (id) {
      dispatch(fetchSelectedAgent(id));
    }
  }, [dispatch, id]);

  return (
    <div className="grid grid-rows-2">
      <div className="max-w-[1240px] mx-auto bg-red-500">
        <div className="p-4 border w-1/2 mx-auto flex">
          <h1 className="font-bold text-2xl px-8 font-[valorant] mx-auto">
            {singleAgent?.displayName}
          </h1>
          <img
            src={singleAgent?.role.displayIcon}
            alt="roleimg"
            className="w-[30px]"
          />
        </div>

        <img
          src={singleAgent?.fullPortraitV2}
          alt="roleIcon"
          className="md:w-1/2"
        />
      </div>
    </div>
  );
};

export default AgentDetail;
