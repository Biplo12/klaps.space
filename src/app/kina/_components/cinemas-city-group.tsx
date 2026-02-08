import React from "react";
import { ICinema } from "@/interfaces/ICinema";
import CinemaLinkItem from "./cinema-link-item";

interface CinemasCityGroupProps {
  cityName: string;
  cinemas: ICinema[];
}

const CinemasCityGroup: React.FC<CinemasCityGroupProps> = ({
  cityName,
  cinemas,
}) => {
  return (
    <div>
      <h2 className="text-white text-xs md:text-sm font-bold uppercase tracking-widest leading-none mb-6">
        {cityName}
      </h2>
      <ul className="divide-y divide-neutral-800" role="list">
        {cinemas.map((cinema) => (
          <CinemaLinkItem key={cinema.id} cinema={cinema} />
        ))}
      </ul>
    </div>
  );
};

export default CinemasCityGroup;
