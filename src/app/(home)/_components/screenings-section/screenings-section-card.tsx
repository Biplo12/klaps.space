import React from "react";
import Link from "next/link";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import {
  formatGeneres,
  getDateString,
  getHoursFromScreenings,
} from "@/lib/utils";
import MoviePoster from "@/components/common/movie-poster";
import MovieMeta from "../hero/movie-meta";
import { Button } from "@/components/ui/button";

interface ScreeningsSectionCardProps {
  screening: IScreeningWithMovie;
  selectedDate: string;
}

const ScreeningsSectionCard: React.FC<ScreeningsSectionCardProps> = ({
  screening,
  selectedDate,
}) => {
  const formattedGenres = formatGeneres(screening.movie.movies_genres);
  const desc = screening.movie.description?.trim() ?? "";

  const screeningsOnDate = screening.screenings.filter(
    (s) => getDateString(new Date(s.date)) === selectedDate
  );

  return (
    <article className="group flex flex-col">
      <div className="relative">
        <Link
          href={`/filmy/${screening.movie.id}`}
          className="block overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-[1.02] w-full aspect-2/3 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <MoviePoster
            posterUrl={screening.movie.posterUrl ?? ""}
            width={220}
            height={330}
            className="w-full h-full object-cover min-w-full min-h-full"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <Link
          href={`/filmy/${screening.movie.id}`}
          id={`screening-card-title-${screening.movie.id}`}
          className="text-lg font-semibold uppercase tracking-wide text-white hover:text-blood-red transition-colors line-clamp-2 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black w-fit"
        >
          {screening.movie.title}
        </Link>

        <MovieMeta
          duration={screening.movie.duration}
          productionYear={screening.movie.productionYear}
          formattedGenres={formattedGenres}
          className="text-sm"
        />

        <p className="text-sm text-white/70 italic line-clamp-2">{desc}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {screeningsOnDate.map((s) => (
            <Button key={s.id} variant="secondary" size="sm" asChild>
              <Link href={s.url}>{getHoursFromScreenings([s])[0]}</Link>
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ScreeningsSectionCard;
