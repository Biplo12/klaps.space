import React from "react";
import MissionImage from "./mission-image";
import MissionText from "./mission-text";

const MissionSection: React.FC = () => {
  return (
    <section id="o-projekcie" className="bg-black px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <MissionImage />
        <MissionText />
      </div>
    </section>
  );
};

export default MissionSection;
