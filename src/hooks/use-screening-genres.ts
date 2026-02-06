"use client";

import { useMemo } from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";

export interface GenreOption {
  id: number;
  name: string;
}

interface UseScreeningGenresReturn {
  genres: GenreOption[];
}

export const useScreeningGenres = (
  screenings: IScreeningWithMovie[]
): UseScreeningGenresReturn => {
  const genres = useMemo(() => {
    const genreMap = new Map<number, GenreOption>();
    screenings.forEach((s) => {
      s.movie.movies_genres?.forEach((mg) => {
        if (!genreMap.has(mg.genre.id)) {
          genreMap.set(mg.genre.id, { id: mg.genre.id, name: mg.genre.name });
        }
      });
    });
    return Array.from(genreMap.values());
  }, [screenings]);

  return {
    genres,
  };
};
