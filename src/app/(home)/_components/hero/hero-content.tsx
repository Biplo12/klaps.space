import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { formatGeneres } from "@/lib/utils";
import MovieMeta from "./movie-meta";
import HeroScreeningInfo from "./hero-screening-info";

interface HeroContentProps {
  screening: IScreeningWithMovie;
}

const HeroContent: React.FC<HeroContentProps> = ({ screening }) => {
  const formattedGenres = formatGeneres(screening.movie.movies_genres);
  const screenings = screening.screenings ?? [];

  return (
    <div className="z-10 absolute top-1/2 left-8 -translate-y-1/2 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-[164px] font-bold text-white uppercase bg-black px-8 pl-0 max-w-fit leading-36">
          {screening.movie.title}
        </h1>
      </div>

      <MovieMeta
        duration={screening.movie.duration}
        productionYear={screening.movie.productionYear}
        formattedGenres={formattedGenres}
      />

      <p className="text-2xl text-white max-w-[700px] font-light">
        {screening.movie.description}
      </p>
    </div>
  );
};

export default HeroContent;
