"use client";

import React from "react";
import { ICity } from "@/interfaces/ICities";
import type { GenreOption } from "./screenings-genre-tags";
import CitySelect from "./city-select";
import ScreeningsDatePicker from "./screenings-date-picker";
import ScreeningsGenreTags from "./screenings-genre-tags";

interface ScreeningsSectionHeaderProps {
  cities: ICity[];
  selectedCityId: number | null;
  onCityChange: (cityId: number | null) => void;
  dates: string[];
  selectedDate: string;
  onDateChange: (date: string) => void;
  genres: GenreOption[];
  selectedGenreId: number | null;
  onGenreChange: (genreId: number | null) => void;
}

const ScreeningsSectionHeader: React.FC<ScreeningsSectionHeaderProps> = ({
  cities,
  selectedCityId,
  onCityChange,
  dates,
  selectedDate,
  onDateChange,
  genres,
  selectedGenreId,
  onGenreChange,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div className="flex flex-col gap-1 border-l-4 border-l-blood-red pl-6 py-1">
          <h2
            id="screenings-section-heading"
            className="text-2xl font-bold uppercase tracking-[0.2em] text-white"
          >
            Seanse
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B3B3B3]">
            Repertuar kin studyjnych
          </span>
        </div>
        <CitySelect
          cities={cities}
          selectedCityId={selectedCityId}
          onCityChange={onCityChange}
          aria-label="Wybierz miasto do filtrowania seansów"
        />
      </div>

      <ScreeningsDatePicker
        dates={dates}
        selectedDate={selectedDate}
        onDateChange={onDateChange}
      />

      <ScreeningsGenreTags
        genres={genres}
        selectedGenreId={selectedGenreId}
        onGenreChange={onGenreChange}
      />
    </div>
  );
};

export default ScreeningsSectionHeader;
