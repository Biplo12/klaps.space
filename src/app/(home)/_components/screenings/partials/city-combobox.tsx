"use client";

import React, { useState } from "react";
import { ICity } from "@/interfaces/ICities";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxValue,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
  ComboboxTrigger,
} from "@/components/ui/combobox";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";

interface CityComboboxProps {
  cities: ICity[];
}

const CityCombobox: React.FC<CityComboboxProps> = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null);

  return (
    <Combobox
      items={cities}
      value={selectedCity}
      onValueChange={setSelectedCity}
    >
      <ComboboxTrigger
        render={
          <Button
            variant="outline"
            className="w-64 justify-between font-normal text-black"
          >
            <ComboboxValue>
              <span>{selectedCity?.name || "Wybierz miasto"}</span>
              <ChevronDownIcon className="size-4" />
            </ComboboxValue>
          </Button>
        }
      />

      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="Search" />
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item: ICity) => (
            <ComboboxItem key={item.id} value={item}>
              {item.name}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default CityCombobox;
