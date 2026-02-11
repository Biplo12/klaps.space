"use client";

import React from "react";
import { useGenreParam } from "@/hooks/use-genre-param";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IGenre } from "@/interfaces/IMovies";
import { cn } from "@/lib/utils";

interface ScreeningsGenreTagsProps {
  genres: IGenre[];
  className?: string;
}

const ScreeningsGenreTags: React.FC<ScreeningsGenreTagsProps> = ({
  genres,
  className,
}) => {
  const { selectedGenre, handleGenreChange, options } = useGenreParam(genres);

  if (genres.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm uppercase tracking-wider text-white/50">
        Gatunek
      </span>
      <RadioGroup
        value={selectedGenre}
        onValueChange={handleGenreChange}
        className={cn("flex flex-wrap gap-2", className)}
      >
        {options.map((genre) => (
          <RadioGroupItem
            key={genre.value || "all"}
            value={genre.value}
            variant="tag"
            size="sm"
          >
            {genre.label}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ScreeningsGenreTags;
