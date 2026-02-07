"use client";

import React from "react";
import { ICity } from "@/interfaces/ICities";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";
import { useCityParam } from "@/hooks/use-city-param";

interface CitySelectProps {
  cities: ICity[];
}

const CitySelect: React.FC<CitySelectProps> = ({ cities }) => {
  const { selectedCity, handleCityChange } = useCityParam(cities);

  return (
    <Combobox
      value={selectedCity?.id?.toString() ?? ""}
      onValueChange={(value) => handleCityChange(value?.toString() ?? "")}
    >
      <ComboboxInput
        placeholder="Wybierz miasto"
        showTrigger
        value={selectedCity?.name ?? ""}
      />
      <ComboboxContent>
        <ComboboxList>
          {cities.length > 0 &&
            cities.map((city) => (
              <ComboboxItem
                key={city.id ?? "all"}
                value={city.id?.toString() ?? ""}
              >
                {city.name}
              </ComboboxItem>
            ))}

          {cities.length === 0 && (
            <p className="text-white/50 py-4 text-center text-sm italic">
              Nie znaleziono miasta
            </p>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default CitySelect;
