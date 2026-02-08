import React from "react";
import StudioCinemaItem from "./studio-cinema-item";
import { ICinema } from "@/interfaces/ICinema";

interface StudioCinemasListProps {
  cinemas: ICinema[];
}

const StudioCinemasList: React.FC<StudioCinemasListProps> = ({ cinemas }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-14 md:gap-x-20">
      {cinemas.map((cinema) => (
        <StudioCinemaItem key={cinema.id} cinema={cinema} />
      ))}
    </ul>
  );
};

export default StudioCinemasList;
