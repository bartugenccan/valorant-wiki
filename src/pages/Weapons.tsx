import React, { useEffect } from "react";

// components
import WeaponsHero from "../components/WeaponsHero";

// redux
import { useAppDispatch } from "../store/hooks";
import { fetchWeapons } from "../features/weaponsSlice";

const Weapons = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeapons());
  }, []);

  return (
    <div>
      <WeaponsHero />
    </div>
  );
};

export default Weapons;
