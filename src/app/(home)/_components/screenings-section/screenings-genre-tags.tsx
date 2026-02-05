"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface GenreOption {
  id: number;
  name: string;
}

interface ScreeningsGenreTagsProps {
  genres: GenreOption[];
  selectedGenreId: number | null;
  onGenreChange: (genreId: number | null) => void;
  className?: string;
}

const ScreeningsGenreTags: React.FC<ScreeningsGenreTagsProps> = ({
  genres,
  selectedGenreId,
  onGenreChange,
  className,
}) => {
  if (genres.length === 0) return null;

  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="group"
      aria-label="Filtruj według gatunku"
    >
      <button
        type="button"
        onClick={() => onGenreChange(null)}
        className={cn(
          "px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          selectedGenreId === null
            ? "bg-white/10 text-white border border-white/50"
            : "bg-transparent text-[#B3B3B3] border border-white/20 hover:border-white/40 hover:text-white"
        )}
      >
        Wszystkie
      </button>
      {genres.map((genre) => {
        const isSelected = selectedGenreId === genre.id;
        return (
          <button
            key={genre.id}
            type="button"
            onClick={() => onGenreChange(isSelected ? null : genre.id)}
            className={cn(
              "px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black",
              isSelected
                ? "bg-white/10 text-white border border-white/50"
                : "bg-transparent text-[#B3B3B3] border border-white/20 hover:border-white/40 hover:text-white"
            )}
          >
            {genre.name}
          </button>
        );
      })}
    </div>
  );
};

export default ScreeningsGenreTags;
