import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";

// redux
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSelectedAgent } from "../features/agentsSlice";

const AgentDetail = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const singleAgent = useAppSelector((state) => state.agents.singleAgent);

  const [disable, setDisable] = React.useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchSelectedAgent(id));
    }
  }, [id]);

  const handleAudio = () => {
    const audio = new Audio(`${singleAgent?.voiceLine.mediaList[0].wave}`);
    audio.load();
    audio.play();
    setDisable(true);
    audio.onended = () => {
      setDisable(false);
    };
  };

  return (
    <div>
      {id === singleAgent?.uuid ? (
        <div className="max-w-[1240px] mx-auto p-12 md:mt-8 shadow-xl border">
          <button
            disabled={disable}
            onClick={handleAudio}
            className="p-4 bg-white flex justify-center items-center mx-auto"
          >
            <h1 className="font-bold text-2xl px-8 font-[valorant]">
              {singleAgent?.displayName}
            </h1>
            <img
              src={singleAgent?.role.displayIcon}
              alt="roleimg"
              className="w-[30px] rounded-full bg-black mb-1"
            />
          </button>

          <div
            className="w-full md:grid grid-cols-3 p-4 rounded-2xl"
            style={{
              background: `${
                singleAgent?.backgroundGradientColors
                  ? `linear-gradient(#${singleAgent?.backgroundGradientColors[0].slice(
                      0,
                      -2
                    )}, #${singleAgent?.backgroundGradientColors[1].slice(
                      0,
                      -2
                    )})`
                  : "linear-gradient(#517cac, #512bad)"
              }`,
            }}
          >
            <img src={singleAgent?.fullPortraitV2} alt="roleIcon" />
            <div className="col-span-2 mt-8">
              <h1 className="font-bold text-normal md:text-2xl text-white shadow-xl shadow-black rounded-xl p-8 font-[valorant]">
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
