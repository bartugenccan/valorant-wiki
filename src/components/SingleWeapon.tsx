import React from "react";

interface SingleWeaponProps {
  name: string;
  image: string;
}

const SingleWeapon: React.FC<SingleWeaponProps> = ({ name, image }) => {
  return (
    <div className="bg-white shadow-lg shadow-black rounded-xl flex flex-col justify-around items-center p-8">
      <h1 className="p-4 font-bold text-center text-2xl">{name}</h1>
      <img
        src={image}
        alt="icon"
        className="rounded-full w-[80px] md:w-[80px]"
      />
    </div>
  );
};

export default SingleWeapon;
