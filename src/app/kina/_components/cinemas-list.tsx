import React from "react";
import { ICinema } from "@/interfaces/ICinema";
import CinemasCityGroup from "./cinemas-city-group";

interface CinemasListProps {
  cinemas: ICinema[];
}

const groupCinemasByCity = (cinemas: ICinema[]) => {
  const grouped = new Map<string, ICinema[]>();

  for (const cinema of cinemas) {
    const city = cinema.cityName;
    const existing = grouped.get(city);

    if (existing) {
      existing.push(cinema);
    } else {
      grouped.set(city, [cinema]);
    }
  }

  const sorted = new Map(
    [...grouped.entries()].sort((a, b) => b[1].length - a[1].length)
  );

  return sorted;
};

const CinemasList: React.FC<CinemasListProps> = ({ cinemas }) => {
  const groupedCinemas = groupCinemasByCity(cinemas);

  if (cinemas.length === 0) {
    return (
      <p className="text-neutral-500 text-base">Brak kin do wyświetlenia.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-16 md:gap-x-20">
      {Array.from(groupedCinemas.entries()).map(([cityName, cityCinemas]) => (
        <CinemasCityGroup
          key={cityName}
          cityName={cityName}
          cinemas={cityCinemas}
        />
      ))}
    </div>
  );
};

export default CinemasList;
