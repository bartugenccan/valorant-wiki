import React from "react";

import { useAppSelector } from "../store/hooks";

// components
import SingleWeapon from "./SingleWeapon";

const WeaponsHero = () => {
  const weapons = useAppSelector((state) => state.weapons.data);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-8 p-8">
      {weapons &&
        weapons.map((weapon) => {
          return (
            <SingleWeapon
              key={weapon.uuid}
              image={weapon.displayIcon}
              name={weapon.displayName}
            />
          );
        })}
    </div>
  );
};

export default WeaponsHero;
