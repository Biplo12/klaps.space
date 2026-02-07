"use client";

import React from "react";
import { ICity } from "@/interfaces/ICities";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox";
import { useCityParam } from "@/hooks/use-city-param";

interface CitySelectProps {
  cities: ICity[];
}

const CitySelect: React.FC<CitySelectProps> = ({ cities }) => {
  const { selectedCity, handleCityChange } = useCityParam(cities);

  return (
    <Combobox
      items={cities}
      value={selectedCity?.id}
      onValueChange={handleCityChange}
    >
      <ComboboxInput placeholder="Wybierz miasto" showTrigger showClear />

      <ComboboxContent>
        <ComboboxList>
          {cities?.map((city, index) => (
            <ComboboxItem key={index} value={city.id}>
              {city.name}
            </ComboboxItem>
          ))}

          <ComboboxEmpty>Nie znaleziono miasta</ComboboxEmpty>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default CitySelect;
