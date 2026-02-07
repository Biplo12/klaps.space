"use client";

import React, { useMemo, useState } from "react";
import { ICity } from "@/interfaces/ICities";
import { useCityParam } from "@/hooks/use-city-param";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";

const ALL_CITIES_OPTION = { id: null, name: "Wszystkie miasta" };

interface CitySelectProps {
  cities: ICity[];
}

const CitySelect: React.FC<CitySelectProps> = ({ cities }) => {
  const { selectedCityId, handleCityChange } = useCityParam();
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = useMemo(
    () => [
      ALL_CITIES_OPTION,
      ...cities.map((c) => ({ id: c.id, name: c.name })),
    ],
    [cities]
  );

  const filteredOptions = useMemo(() => {
    if (!searchValue.trim()) return options;

    const search = searchValue.toLowerCase();
    return options.filter((option) =>
      option.name.toLowerCase().includes(search)
    );
  }, [options, searchValue]);

  const selectedCityName = useMemo(() => {
    const selectedOption = options.find(
      (opt) => (opt.id?.toString() ?? "") === selectedCityId
    );
    return selectedOption?.name ?? "";
  }, [options, selectedCityId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleValueChange = (value: string | null) => {
    handleCityChange(value);
    setSearchValue("");
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setSearchValue("");
    }
  };

  const inputValue = isOpen ? searchValue : selectedCityName;

  return (
    <Combobox
      value={selectedCityId}
      onValueChange={handleValueChange}
      open={isOpen}
      onOpenChange={handleOpenChange}
    >
      <ComboboxInput
        placeholder="Wybierz miasto"
        showTrigger
        value={inputValue}
        onChange={handleInputChange}
      />
      <ComboboxContent>
        <ComboboxList>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <ComboboxItem
                key={option.id ?? "all"}
                value={option.id?.toString() ?? ""}
              >
                {option.name}
              </ComboboxItem>
            ))
          ) : (
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
