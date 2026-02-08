"use client";

import React from "react";
import { ICity } from "@/interfaces/ICities";
import { IGenre } from "@/interfaces/IMovies";
import CitySelect from "../../../../components/common/city-select";
import ScreeningsDatePicker from "./screenings-date-picker";
import ScreeningsGenreTags from "./screenings-genre-tags";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/common/section-header";

interface ScreeningsSectionHeaderProps {
  cities: ICity[];
  genres: IGenre[];
}

const ScreeningsSectionHeader: React.FC<ScreeningsSectionHeaderProps> = ({
  cities,
  genres,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <SectionHeader
          prefix="Seanse"
          title="Lista seansów"
          description="Wybierz miasto i datę oraz gatunek, aby zobaczyć seanse w tym mieście."
        />
        <CitySelect cities={cities} />
      </div>

      <ScreeningsDatePicker />
      <ScreeningsGenreTags genres={genres} />
    </div>
  );
};

export default ScreeningsSectionHeader;
