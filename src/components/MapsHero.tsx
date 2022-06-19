import React from "react";
import { useAppSelector } from "../store/hooks";

// components
import SingleMap from "./SingleMap";

const MapsHero = () => {
  const maps = useAppSelector((state) => state.maps.data);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-8 p-8">
      {maps &&
        maps.map((map) => {
          return (
            <SingleMap
              key={map.uuid}
              image={map.splash}
              name={map.displayName}
            />
          );
        })}
    </div>
  );
};

export default MapsHero;
