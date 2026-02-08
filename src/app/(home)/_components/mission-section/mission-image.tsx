import React from "react";
import Image from "next/image";

const MISSION_IMAGE_SRC = "/images/mission-section-image.jpg";
const MISSION_IMAGE_ALT =
  "Osoba rozłożona na fotelu w ciemnej sali kinowej z uniesioną ręką, niebieskie fotele w tle";

const MissionImage: React.FC = () => {
  return (
    <div className="relative aspect-3/4 w-full max-h-[650px] group">
      <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-blood-red z-10 pointer-events-none" />
      <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-blood-red z-10 pointer-events-none" />

      <Image
        src={MISSION_IMAGE_SRC}
        alt={MISSION_IMAGE_ALT}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 60vw, 50vw"
      />
    </div>
  );
};

export default MissionImage;
