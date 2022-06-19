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
  }, [id]);

  if (id === singleAgent?.uuid) {
    console.log(singleAgent?.backgroundGradientColors[0].slice(0, -2));
  }

  return (
    <div>
      {id === singleAgent?.uuid ? (
        <div className="max-w-[1240px] mx-auto bg-white">
          <div className="p-4 bg-white w-1/2 mx-auto flex">
            <h1 className="font-bold text-2xl px-8 font-[valorant] mx-auto">
              {singleAgent?.displayName}
            </h1>
            <img
              src={singleAgent?.role.displayIcon}
              alt="roleimg"
              className="w-[30px]"
            />
          </div>

          <div
            className="w-full md:grid grid-cols-3 p-4"
            style={{
              backgroundColor: `#${singleAgent?.backgroundGradientColors[0].slice(
                0,
                -2
              )}`,
            }}
          >
            <img src={singleAgent?.fullPortraitV2} alt="roleIcon" />
            <div className="col-span-2">
              <h1 className="font-bold text-2xl text-white">
                {singleAgent?.description}
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AgentDetail;
