"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useGenreParam } from "@/hooks/use-genre-param";
import type { GenreOption } from "@/hooks/use-screening-genres";
import { cn } from "@/lib/utils";

export type { GenreOption };

interface ScreeningsGenreTagsProps {
  genres: GenreOption[];
  className?: string;
}

const ScreeningsGenreTags: React.FC<ScreeningsGenreTagsProps> = ({
  genres,
  className,
}) => {
  const { selectedGenreId, handleGenreChange } = useGenreParam();

  if (genres.length === 0) return null;

  const allGenres = [{ id: null, name: "Wszystkie" }, ...genres];

  const isGenreSelected = (genreId: number | null) => {
    return genreId === null
      ? selectedGenreId === ""
      : selectedGenreId === genreId.toString();
  };

  const handleGenreClick = (genreId: number | null) => {
    if (isGenreSelected(genreId)) return;
    handleGenreChange(genreId?.toString() ?? null);
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {allGenres.map((genre) => {
        const selected = isGenreSelected(genre.id);

        return (
          <Button
            key={genre.id ?? "all"}
            size="sm"
            variant={selected ? "tag-active" : "tag"}
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.name}
          </Button>
        );
      })}
    </div>
  );
};

export default ScreeningsGenreTags;
