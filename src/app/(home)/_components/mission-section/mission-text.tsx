import React from "react";
import MissionHeader from "./mission-header";
import MissionContent from "./mission-content";

const MissionText: React.FC = () => {
  return (
    <div className="flex lg:py-16 flex-col gap-10 max-w-lg">
      <MissionHeader />
      <MissionContent />
    </div>
  );
};

export default MissionText;
