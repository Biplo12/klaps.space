"use client";

import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { ICity } from "@/interfaces/ICities";
import { IGenre } from "@/interfaces/IMovies";
import {
  ScreeningsTransitionProvider,
  useScreeningsTransition,
} from "@/contexts/screenings-transition-context";
import { cn } from "@/lib/utils";
import ScreeningsSectionHeader from "./screenings-section-header";
import ScreeningsSectionList from "./screenings-section-list";

interface ScreeningsSectionContentProps {
  screenings: IScreeningWithMovie[];
  cities: ICity[];
  genres: IGenre[];
}

const ScreeningsSectionContentInner: React.FC<
  ScreeningsSectionContentProps
> = ({ screenings, cities, genres }) => {
  const { isPending } = useScreeningsTransition();

  return (
    <div
      className={cn(
        "flex flex-col gap-10 transition-opacity duration-200",
        isPending && "opacity-50 pointer-events-none"
      )}
    >
      <ScreeningsSectionHeader cities={cities} genres={genres} />
      <ScreeningsSectionList screenings={screenings} />
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
