"use client";

import React, { useMemo, useState } from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { ICity } from "@/interfaces/ICities";
import { getDateString } from "@/lib/utils";
import type { GenreOption } from "./screenings-genre-tags";
import ScreeningsSectionHeader from "./screenings-section-header";
import ScreeningsSectionList from "./screenings-section-list";

interface ScreeningsSectionContentProps {
  screenings: IScreeningWithMovie[];
  cities: ICity[];
}

const extractUniqueDates = (screenings: IScreeningWithMovie[]): string[] => {
  const dates = new Set<string>();
  screenings.forEach((s) =>
    s.screenings.forEach((show) =>
      dates.add(getDateString(new Date(show.date)))
    )
  );
  return Array.from(dates);
};

const extractUniqueGenres = (
  screenings: IScreeningWithMovie[]
): GenreOption[] => {
  const genreMap = new Map<number, string>();
  screenings.forEach((s) =>
    s.movie.movies_genres.forEach((mg) => {
      if (!genreMap.has(mg.genre.id)) {
        genreMap.set(mg.genre.id, mg.genre.name);
      }
    })
  );
  return Array.from(genreMap.entries())
    .map(([id, name]) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

const filterScreenings = (
  screenings: IScreeningWithMovie[],
  selectedDate: string,
  selectedCityId: number | null,
  selectedCityName: string | null,
  selectedGenreId: number | null
): IScreeningWithMovie[] => {
  return screenings
    .filter((s) => {
      const screeningsOnDate = s.screenings.filter(
        (show) => getDateString(new Date(show.date)) === selectedDate
      );
      if (screeningsOnDate.length === 0) return false;

      if (selectedCityId !== null && selectedCityName) {
        const hasInCity = screeningsOnDate.some(
          (show) => show.cityName === selectedCityName
        );
        if (!hasInCity) return false;
      }

      if (selectedGenreId !== null) {
        const hasGenre = s.movie.movies_genres.some(
          (mg) => mg.genre.id === selectedGenreId
        );
        if (!hasGenre) return false;
      }

      return true;
    })
    .map((s) => ({
      ...s,
      screenings: s.screenings.filter((show) => {
        const onDate = getDateString(new Date(show.date)) === selectedDate;
        if (selectedCityId !== null && selectedCityName) {
          return onDate && show.cityName === selectedCityName;
        }
        return onDate;
      }),
    }))
    .filter((s) => s.screenings.length > 0);
};

const ScreeningsSectionContent: React.FC<ScreeningsSectionContentProps> = ({
  screenings,
  cities,
}) => {
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);

  const dates = useMemo(() => extractUniqueDates(screenings), [screenings]);
  const genres = useMemo(() => extractUniqueGenres(screenings), [screenings]);

  const activeDate = selectedDate ?? dates[0] ?? "";
  const selectedCity = cities.find((c) => c.id === selectedCityId);
  const filteredScreenings = useMemo(
    () =>
      filterScreenings(
        screenings,
        activeDate,
        selectedCityId,
        selectedCity?.name ?? null,
        selectedGenreId
      ),
    [
      screenings,
      activeDate,
      selectedCityId,
      selectedCity?.name,
      selectedGenreId,
    ]
  );

  return (
    <div className="flex flex-col gap-10">
      <ScreeningsSectionHeader
        cities={cities}
        selectedCityId={selectedCityId}
        onCityChange={setSelectedCityId}
        dates={dates}
        selectedDate={activeDate}
        onDateChange={setSelectedDate}
        genres={genres}
        selectedGenreId={selectedGenreId}
        onGenreChange={setSelectedGenreId}
      />
      <ScreeningsSectionList
        screenings={filteredScreenings}
        selectedDate={activeDate}
      />
    </div>
  );
};

export default ScreeningsSectionContent;
