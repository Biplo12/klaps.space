import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { formatGeneres } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { HeroPrimaryCTA, HeroSecondaryCTA } from "@/components/cta";
import MovieMeta from "./movie-meta";

interface HeroContentProps {
  screening: IScreeningWithMovie;
}

const HERO_BADGE_LABEL = "Teraz w kinie";
const CTA_BUY_TICKET = "Kup bilet";
const CTA_SEE_SCREENINGS = "Zobacz seanse";
const SCREENINGS_SECTION_ID = "#seanse";

const HeroContent: React.FC<HeroContentProps> = ({ screening }) => {
  const formattedGenres = formatGeneres(screening.movie.movies_genres);

  return (
    <div className="z-10 absolute top-1/2 left-8 -translate-y-1/2 flex flex-col gap-8">
      <Badge variant="label" className="ml-4">
        {HERO_BADGE_LABEL}
      </Badge>
      <h1 className="text-[164px] font-bold text-white uppercase bg-black px-8 pl-0 max-w-fit leading-36">
        {screening.movie.title}
      </h1>

      <div className="flex flex-col gap-4 pl-4">
        <MovieMeta
          duration={screening.movie.duration}
          productionYear={screening.movie.productionYear}
          formattedGenres={formattedGenres}
        />

        <p className="text-2xl text-white font-light italic max-w-[700px]">
          {screening.movie.description}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <HeroPrimaryCTA href={SCREENINGS_SECTION_ID}>
            {CTA_BUY_TICKET}
          </HeroPrimaryCTA>
          <HeroSecondaryCTA href={SCREENINGS_SECTION_ID}>
            {CTA_SEE_SCREENINGS}
          </HeroSecondaryCTA>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
