import React from "react";
import Link from "next/link";
import { IMultiCityMovie } from "@/interfaces/IMovies";

interface MultiCityItemProps {
  movie: IMultiCityMovie;
}

const MultiCityItem: React.FC<MultiCityItemProps> = ({ movie }) => {
  const formattedCityLabel =
    movie.citiesCount === 1
      ? "miasto"
      : movie.citiesCount < 5
      ? "miasta"
      : "miast";

  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-neutral-800 pb-4">
      <Link
        href={`/filmy/${movie.id}`}
        className="text-white text-lg md:text-xl font-semibold transition-colors duration-200 hover:text-blood-red"
      >
        {movie.title} ({movie.year})
      </Link>
      <span className="text-neutral-500 text-sm whitespace-nowrap">
        {movie.citiesCount} {formattedCityLabel}
      </span>
    </li>
  );
};

export default MultiCityItem;
