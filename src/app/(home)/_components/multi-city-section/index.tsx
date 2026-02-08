import React from "react";
import SectionHeader from "@/components/common/section-header";
import MultiCityList from "./multi-city-list";
import MultiCityPoster from "./multi-city-poster";
import { IMultiCityMovie } from "@/interfaces/IMovies";

interface MultiCitySectionProps {
  movies: IMultiCityMovie[];
}

const MultiCitySection: React.FC<MultiCitySectionProps> = ({ movies }) => {
  if (movies.length === 0) return null;

  const mostPlayedMovie = movies.sort(
    (a, b) => b.citiesCount - a.citiesCount
  )[0];

  return (
    <section className="bg-black px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <SectionHeader
          prefix="W kinach w całej Polsce"
          title="Filmy grane w wielu miastach"
          description="Te filmy wracają do kin w&nbsp;całej Polsce."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <MultiCityList movies={movies} />
          <MultiCityPoster movie={mostPlayedMovie} />
        </div>
      </div>
    </section>
  );
};

export default MultiCitySection;
