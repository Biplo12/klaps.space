import React from "react";

const MissionHeader: React.FC = () => {
  return (
    <h2 className="flex flex-col">
      <span className="text-blood-red text-sm uppercase tracking-widest">
        O projekcie
      </span>
      <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
        Klatka
      </span>
    </h2>
  );
};

export default MissionHeader;
