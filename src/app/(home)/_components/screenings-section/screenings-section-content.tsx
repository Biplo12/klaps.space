"use client";

import React from "react";
import { IScreeningGroup } from "@/interfaces/IScreenings";
import { IGenre } from "@/interfaces/IMovies";
import {
  ScreeningsTransitionProvider,
  useScreeningsTransition,
} from "@/contexts/screenings-transition-context";
import { cn } from "@/lib/utils";
import ScreeningsSectionHeader from "./screenings-section-header";
import ScreeningsSectionCta from "./screenings-section-cta";
import MoviesGrid from "@/app/filmy/_components/movies-grid";

interface ScreeningsSectionContentProps {
  screenings: IScreeningGroup[];
  genres: IGenre[];
}

const ScreeningsSectionContentInner: React.FC<
  ScreeningsSectionContentProps
> = ({ screenings, genres }) => {
  const { isPending } = useScreeningsTransition();

  const movies = screenings.map((screening) => screening.movie);

  return (
    <div
      className={cn(
        "flex flex-col gap-10 transition-opacity duration-200",
        isPending && "opacity-50 pointer-events-none"
      )}
    >
      <ScreeningsSectionHeader genres={genres} />

      <MoviesGrid
        screenings={screenings}
        movies={movies}
        showDescription={true}
      />

      {screenings.length >= 12 && <ScreeningsSectionCta />}
    </div>
  );
};

const ScreeningsSectionContent: React.FC<ScreeningsSectionContentProps> = (
  props
) => (
  <ScreeningsTransitionProvider>
    <ScreeningsSectionContentInner {...props} />
  </ScreeningsTransitionProvider>
);

export default ScreeningsSectionContent;
