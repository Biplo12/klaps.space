"use client";

import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { ICity } from "@/interfaces/ICities";
import { useScreenings } from "@/hooks/use-screenings";
import { useScreeningDates } from "@/hooks/use-screening-dates";
import { useScreeningGenres } from "@/hooks/use-screening-genres";
import { useCityParam } from "@/hooks/use-city-param";
import { useGenreParam } from "@/hooks/use-genre-param";
import ScreeningsSectionHeader from "./screenings-section-header";
import ScreeningsSectionList from "./screenings-section-list";
import { Loader2 } from "lucide-react";

interface ScreeningsSectionContentProps {
  initialScreenings: IScreeningWithMovie[];
  cities: ICity[];
}

const ScreeningsSectionContent: React.FC<ScreeningsSectionContentProps> = ({
  initialScreenings,
  cities,
}) => {
  const { selectedCityId } = useCityParam();
  const { selectedGenreId } = useGenreParam();

  const { screenings, isLoading } = useScreenings({
    initialScreenings,
    cityId: selectedCityId,
    genreId: selectedGenreId,
  });

  const { dates, activeDate } = useScreeningDates(screenings);
  const { genres } = useScreeningGenres(initialScreenings);

  return (
    <div className="flex flex-col gap-10">
      <ScreeningsSectionHeader cities={cities} dates={dates} genres={genres} />

      {isLoading && (
        <div className="flex items-center justify-center py-20 min-h-[500px]">
          <Loader2 className="h-8 w-8 animate-spin text-blood-red" />
        </div>
      )}
      {!isLoading && (
        <ScreeningsSectionList
          screenings={screenings}
          selectedDate={activeDate}
          selectedCityId={selectedCityId}
        />
      )}
    </div>
  );
};

export default ScreeningsSectionContent;
