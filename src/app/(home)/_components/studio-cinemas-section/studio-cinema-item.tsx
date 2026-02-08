import React from "react";
import { ICinema } from "@/interfaces/ICinema";

interface StudioCinemaItemProps {
  cinema: ICinema;
}

const StudioCinemaItem: React.FC<StudioCinemaItemProps> = ({ cinema }) => {
  return (
    <li className="group">
      <span className="block text-white text-xs md:text-sm font-bold uppercase tracking-widest leading-none">
        {cinema.cityName}
      </span>
      <a
        href={cinema.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-neutral-300 text-lg md:text-xl leading-snug transition-colors duration-200 hover:text-red-800 hover:underline hover:underline-offset-4 focus-visible:text-red-800 focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none"
      >
        {cinema.name}
      </a>
    </li>
  );
};

export default StudioCinemaItem;
