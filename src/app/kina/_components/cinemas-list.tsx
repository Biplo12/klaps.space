import React from "react";
import { ICinema } from "@/interfaces/ICinema";
import CinemasCityGroup from "./cinemas-city-group";
import { groupCinemasByCity } from "@/lib/cinemas";

interface CinemasListProps {
  cinemas: ICinema[];
}

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
