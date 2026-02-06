"use client";

import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { ICity } from "@/interfaces/ICities";
import { useScreeningDates } from "@/hooks/use-screening-dates";
import { useScreeningGenres } from "@/hooks/use-screening-genres";
import ScreeningsSectionHeader from "./screenings-section-header";
import ScreeningsSectionList from "./screenings-section-list";

interface ScreeningsSectionContentProps {
  screenings: IScreeningWithMovie[];
  cities: ICity[];
}

const ScreeningsSectionContent: React.FC<ScreeningsSectionContentProps> = ({
  screenings,
  cities,
}) => {
  const { dates, activeDate } = useScreeningDates(screenings);
  const { genres } = useScreeningGenres(screenings);

  return (
    <div className="flex flex-col gap-10">
      <ScreeningsSectionHeader cities={cities} dates={dates} genres={genres} />
      <ScreeningsSectionList
        screenings={screenings}
        selectedDate={activeDate}
      />
    </div>
  );
};

export default ScreeningsSectionContent;
