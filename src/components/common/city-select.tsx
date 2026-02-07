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
  const { selectedCity, handleCityChange, options } = useCityParam(cities);

  return (
    <Combobox
      items={options}
      value={selectedCity?.id}
      onValueChange={handleCityChange}
    >
      <ComboboxInput placeholder="Wybierz miasto" showTrigger showClear />

      <ComboboxContent>
        <ComboboxList>
          {options?.map((option, index) => (
            <ComboboxItem key={index} value={option.id}>
              {option.name}
            </ComboboxItem>
          ))}

          <ComboboxEmpty>Nie znaleziono miasta</ComboboxEmpty>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default CitySelect;
