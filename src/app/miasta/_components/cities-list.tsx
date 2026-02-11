import React from "react";
import { ICinemaGroup } from "@/interfaces/ICinema";
import CitiesLetterGroup from "./cities-letter-group";

interface CitiesListProps {
  cinemaGroups: ICinemaGroup[];
}

const CitiesList: React.FC<CitiesListProps> = ({ cinemaGroups }) => {
  if (cinemaGroups.length === 0) {
    return (
      <p className="text-neutral-500 text-base">Brak miast do wyświetlenia.</p>
    );
  }

  const sortedGroups = [...cinemaGroups].sort((a, b) =>
    a.city.name.localeCompare(b.city.name, "pl")
  );

  const letterGroups = sortedGroups.reduce<Record<string, ICinemaGroup[]>>(
    (acc, group) => {
      const letter = group.city.name[0].toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(group);
      return acc;
    },
    {}
  );

  const sortedLetters = Object.keys(letterGroups).sort((a, b) =>
    a.localeCompare(b, "pl")
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-16 md:gap-x-20">
      {sortedLetters.map((letter) => (
        <CitiesLetterGroup
          key={letter}
          letter={letter}
          cinemaGroups={letterGroups[letter]}
        />
      ))}
    </div>
  );
};

export default CitiesList;
