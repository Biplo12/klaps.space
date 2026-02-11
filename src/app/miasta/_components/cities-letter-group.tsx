import React from "react";
import { ICinemaGroup } from "@/interfaces/ICinema";
import CityLinkItem from "./city-link-item";

interface CitiesLetterGroupProps {
  letter: string;
  cinemaGroups: ICinemaGroup[];
}

const CitiesLetterGroup: React.FC<CitiesLetterGroupProps> = ({
  letter,
  cinemaGroups,
}) => {
  return (
    <div>
      <h2 className="text-white text-xs md:text-sm font-bold uppercase tracking-widest leading-none mb-6">
        {letter}
      </h2>

      <ul className="divide-y divide-neutral-800">
        {cinemaGroups.map((group) => (
          <CityLinkItem
            key={group.city.id}
            city={group.city}
            cinemasCount={group.cinemas.length}
          />
        ))}
      </ul>
    </div>
  );
};

export default CitiesLetterGroup;
