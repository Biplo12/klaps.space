"use client";

import React from "react";
import { IGenre } from "@/interfaces/IMovies";
import HeaderCitySelect from "@/components/layout/header/header-city-select";
import ScreeningsDatePicker from "./screenings-date-picker";
import ScreeningsGenreTags from "./screenings-genre-tags";
import SectionHeader from "@/components/common/section-header";

interface ScreeningsSectionHeaderProps {
  genres: IGenre[];
}

const ScreeningsSectionHeader: React.FC<ScreeningsSectionHeaderProps> = ({
  genres,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <SectionHeader
          prefix="Seanse"
          title="Lista seansów"
          description="Wybierz miasto, datę i gatunek, aby zobaczyć dostępne seanse."
        />
        <HeaderCitySelect size="md" />
      </div>

      <ScreeningsDatePicker />
      <ScreeningsGenreTags genres={genres} />
    </div>
  );
};

export default ScreeningsSectionHeader;
