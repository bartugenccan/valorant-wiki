import React, { useEffect } from "react";

// components
import MapsHero from "../components/MapsHero";
import { useAppDispatch } from "../store/hooks";
import { fetchMaps } from "../features/mapsSlice";

const Maps = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMaps());
  }, []);

  return (
    <div>
      <MapsHero />
    </div>
  );
};

export default Maps;
