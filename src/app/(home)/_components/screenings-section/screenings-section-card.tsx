import React from "react";
import Link from "next/link";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import {
  formatDuration,
  formatGeneres,
  getHoursFromScreenings,
  getDateString,
} from "@/lib/utils";
import MoviePoster from "@/components/common/movie-poster";
import { cn } from "@/lib/utils";

const META_SEPARATOR = " · ";
const DESCRIPTION_MAX_LENGTH = 120;

interface ScreeningsSectionCardProps {
  screening: IScreeningWithMovie;
  selectedDate: string;
  isRecommended?: boolean;
}

const ScreeningsSectionCard: React.FC<ScreeningsSectionCardProps> = ({
  screening,
  selectedDate,
  isRecommended = false,
}) => {
  const screeningsOnDate = screening.screenings
    .filter((s) => getDateString(new Date(s.date)) === selectedDate)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (screeningsOnDate.length === 0) return null;

  const formattedGenres = formatGeneres(screening.movie.movies_genres);
  const durationText = formatDuration(screening.movie.duration);
  const desc = screening.movie.description?.trim() ?? "";
  const tagline =
    desc.length > DESCRIPTION_MAX_LENGTH
      ? desc.slice(0, DESCRIPTION_MAX_LENGTH).trim() + "…"
      : desc || null;

  return (
    <article
      className="group flex flex-col"
      aria-labelledby={`screening-card-title-${screening.movie.id}`}
    >
      <div className="relative">
        <Link
          href={`/filmy/${screening.movie.id}`}
          className="block overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-[1.02] w-full aspect-2/3 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label={`Zobacz szczegóły filmu ${screening.movie.title}`}
        >
          <MoviePoster
            posterUrl={screening.movie.posterUrl ?? ""}
            width={220}
            height={330}
            className="w-full h-full object-cover min-w-full min-h-full"
          />
        </Link>

        {isRecommended && (
          <span
            className="absolute top-2 left-2 bg-blood-red px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white"
            aria-label="Polecane przez redakcję"
          >
            Polecane
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <Link
          href={`/filmy/${screening.movie.id}`}
          id={`screening-card-title-${screening.movie.id}`}
          className="text-lg font-semibold uppercase tracking-wide text-white hover:text-blood-red transition-colors line-clamp-2 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black w-fit"
        >
          {screening.movie.title}
        </Link>

        <p className="text-sm text-[#B3B3B3] tracking-normal">
          {durationText}
          {META_SEPARATOR}
          {screening.movie.productionYear}
          {META_SEPARATOR}
          <span className="uppercase tracking-[0.08em]">{formattedGenres}</span>
        </p>

        {tagline && (
          <p className="text-sm text-white/70 italic line-clamp-2">{tagline}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-2">
          {screeningsOnDate.map((s) => (
            <Link
              key={s.id}
              href={s.url}
              className={cn(
                "inline-flex items-center justify-center px-3 py-2 text-xs font-semibold uppercase tracking-wider",
                "bg-transparent border border-white/30 text-white",
                "hover:bg-blood-red hover:border-blood-red hover:text-white",
                "transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              )}
            >
              {getHoursFromScreenings([s])[0]}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ScreeningsSectionCard;
