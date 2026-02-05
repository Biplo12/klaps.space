import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { formatGeneres } from "@/lib/utils";
import { HeroPrimaryCTA, HeroSecondaryCTA } from "@/components/cta";
import MovieMeta from "./movie-meta";
import { Badge } from "@/components/ui/badge";

interface HeroContentProps {
  screening: IScreeningWithMovie;
}

const HERO_LABEL_MAIN = "TERAZ W KINIE";
const HERO_LABEL_SUB = "POKAZ RETROSPEKTYWNY";
const CTA_PRIMARY = "ZOBACZ SEANSE";
const CTA_SECONDARY = "SZCZEGÓŁY FILMU";
const SCREENINGS_SECTION_ID = "#seanse";
const TRUST_LINE =
  "Aktualne seanse z kin studyjnych w Polsce. Dane z publicznych źródeł.";

const HeroContent: React.FC<HeroContentProps> = ({ screening }) => {
  const formattedGenres = formatGeneres(screening.movie.movies_genres);
  const movieDetailsHref = `/filmy/${screening.movie.id}`;

  return (
    <div className="z-10 absolute bottom-8 left-4 right-4 md:bottom-auto md:top-1/2 md:left-8 md:right-auto md:-translate-y-1/2 flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col">
        <Badge variant="label" suffix={HERO_LABEL_SUB}>
          {HERO_LABEL_MAIN}
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[108px] font-bold text-white uppercase md:bg-black px-0 md:px-8 py-2 md:py-6 md:pb-8 md:pl-0 max-w-fit leading-tight md:leading-36">
          {screening.movie.title}
        </h1>
      </div>

      <div className="flex flex-col gap-3 md:gap-4 pl-2 md:pl-4">
        <MovieMeta
          duration={screening.movie.duration}
          productionYear={screening.movie.productionYear}
          formattedGenres={formattedGenres}
        />

        <p className="text-base md:text-xl lg:text-2xl text-white font-light italic max-w-[650px] line-clamp-3 md:line-clamp-none">
          {screening.movie.description}
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-2">
          <HeroPrimaryCTA href={SCREENINGS_SECTION_ID}>
            {CTA_PRIMARY}
          </HeroPrimaryCTA>
          <HeroSecondaryCTA href={movieDetailsHref}>
            {CTA_SECONDARY}
          </HeroSecondaryCTA>
        </div>

        <p className="text-xs md:text-sm italic text-[#B3B3B3] max-w-[500px] pt-2 md:pt-4 hidden sm:block">
          {TRUST_LINE}
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
