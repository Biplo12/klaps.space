import React from "react";
import Image from "next/image";
import { IMultiCityMovie } from "@/interfaces/IMovies";
import LinkWithArrow from "@/components/ui/read-more-link";

interface MultiCityPosterProps {
  movie: IMultiCityMovie;
}

const MultiCityPoster: React.FC<MultiCityPosterProps> = ({ movie }) => {
  if (!movie.posterUrl) return null;

  return (
    <div className="hidden lg:flex gap-8 items-start">
      <div className="relative aspect-2/3 w-full max-w-[315px] shrink-0">
        <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-blood-red z-10 pointer-events-none" />
        <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-blood-red z-10 pointer-events-none" />

        <Image
          src={movie.posterUrl}
          alt={`Plakat filmu ${movie.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 1100px) 0vw, 35vw"
        />
      </div>

      <div className="flex flex-col gap-4 pt-4">
        <span className="text-blood-red text-sm uppercase tracking-widest">
          Najczęściej grany
        </span>
        <h3 className="text-white text-2xl xl:text-3xl font-bold leading-tight">
          {movie.title}
        </h3>
        <span className="text-neutral-500 text-sm">
          {movie.year} · {movie.citiesCount} miast
        </span>
        <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
          Wyświetlany w&nbsp;{movie.citiesCount} miastach jednocześnie &nbsp;-
          od dużych metropolii po mniejsze ośrodki.
        </p>

        <LinkWithArrow href={`/filmy/${movie.id}`} label="Zobacz szczegóły" />
      </div>
    </div>
  );
};

export default MultiCityPoster;
