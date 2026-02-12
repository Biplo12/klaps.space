"use client";

import React from "react";
import { IGenre } from "@/interfaces/IMovies";
import HeaderCitySelect from "@/components/layout/header/header-city-select";
import ScreeningsDatePicker from "./screenings-date-picker";
import ScreeningsGenreTags from "./screenings-genre-tags";

interface ScreeningsPageFiltersProps {
  genres: IGenre[];
}

const ScreeningsPageFilters: React.FC<ScreeningsPageFiltersProps> = ({
  genres,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <p className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed">
          Wybierz miasto, datę i gatunek, aby znaleźć interesujące seanse.
        </p>
        <HeaderCitySelect size="md" />
      </div>

      <ScreeningsDatePicker />
      <ScreeningsGenreTags genres={genres} />
    </div>
  );
};

export default ScreeningsPageFilters;
