"use client";

import React from "react";
import { ICity } from "@/interfaces/ICities";
import type { GenreOption } from "./screenings-genre-tags";
import CitySelect from "../../../../components/common/city-select";
import ScreeningsDatePicker from "./screenings-date-picker";
import ScreeningsGenreTags from "./screenings-genre-tags";
import { Badge } from "@/components/ui/badge";

interface ScreeningsSectionHeaderProps {
  cities: ICity[];
  dates: string[];
  genres: GenreOption[];
}

const ScreeningsSectionHeader: React.FC<ScreeningsSectionHeaderProps> = ({
  cities,
  dates,
  genres,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <Badge variant="label" suffix="Repertuar kin studyjnych">
          Seanse
        </Badge>
        <CitySelect cities={cities} />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm uppercase tracking-wider text-white/50">
          Data
        </span>
        <ScreeningsDatePicker dates={dates} />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm uppercase tracking-wider text-white/50">
          Gatunek
        </span>
        <ScreeningsGenreTags genres={genres} />
      </div>
    </div>
  );
};

export default ScreeningsSectionHeader;
