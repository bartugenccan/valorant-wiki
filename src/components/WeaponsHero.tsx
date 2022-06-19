import React from "react";

import { useAppSelector } from "../store/hooks";

const WeaponsHero = () => {
  const weapons = useAppSelector((state) => state.weapons.data);

  return (
    <div>
      {weapons &&
        weapons.map((weapon) => {
          return <div>{weapon.displayName}</div>;
        })}
    </div>
  );
};

export default WeaponsHero;
