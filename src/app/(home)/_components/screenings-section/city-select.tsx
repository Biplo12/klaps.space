"use client";

import React, { useMemo } from "react";
import { ICity } from "@/interfaces/ICities";
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
  selectedCityId: number | null;
  onCityChange: (cityId: number | null) => void;
  className?: string;
  "aria-label"?: string;
}

const CitySelect: React.FC<CitySelectProps> = ({
  cities,
  selectedCityId,
  onCityChange,
  className,
  "aria-label": ariaLabel = "Wybierz miasto",
}) => {
  const options = useMemo(
    () => [
      ALL_CITIES_OPTION,
      ...cities.map((c) => ({ id: c.id, name: c.name })),
    ],
    [cities]
  );

  const selectedValue = selectedCityId?.toString() ?? "";

  const handleValueChange = (value: string | null) => {
    if (value === null || value === "") {
      onCityChange(null);
    } else {
      onCityChange(parseInt(value, 10));
    }
  };

  return (
    <div className={className}>
      <Combobox value={selectedValue} onValueChange={handleValueChange}>
        <ComboboxInput
          placeholder="Wybierz miasto"
          aria-label={ariaLabel}
          showTrigger
          showClear={selectedCityId !== null}
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
    </div>
  );
};

export default CitySelect;
