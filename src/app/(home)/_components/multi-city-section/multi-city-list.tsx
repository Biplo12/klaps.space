import React from "react";
import MultiCityItem from "./multi-city-item";
import { IMultiCityMovie } from "@/interfaces/IMovies";

interface MultiCityListProps {
  movies: IMultiCityMovie[];
}

const MultiCityList: React.FC<MultiCityListProps> = ({ movies }) => {
  return (
    <ul className="flex flex-col gap-4">
      {movies.map((movie) => (
        <MultiCityItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MultiCityList;
