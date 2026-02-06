"use client";

import React, { useMemo } from "react";
import { ICity } from "@/interfaces/ICities";
import { useCityParam } from "@/hooks/use-city-param";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox";

const ALL_CITIES_OPTION = { id: null, name: "Wszystkie miasta" };

interface CitySelectProps {
  cities: ICity[];
}

const CitySelect: React.FC<CitySelectProps> = ({ cities }) => {
  const { selectedCityId, handleCityChange } = useCityParam();

  const options = useMemo(
    () => [
      ALL_CITIES_OPTION,
      ...cities.map((c) => ({ id: c.id, name: c.name })),
    ],
    [cities]
  );

  return (
    <Combobox value={selectedCityId} onValueChange={handleCityChange}>
      <ComboboxInput
        placeholder="Wybierz miasto"
        showTrigger
        className="min-w-[220px]"
      />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>Brak wyników</ComboboxEmpty>
          {options.map((option) => (
            <ComboboxItem
              key={option.id ?? "all"}
              value={option.id?.toString() ?? ""}
            >
              {option.name}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default CitySelect;
