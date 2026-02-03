import CityCombobox from "./city-combobox";
import { getCities } from "@/lib/cities";
import React from "react";

const ScreeningsFilters: React.FC = async () => {
  const cities = await getCities();

  return (
    <div>
      <CityCombobox cities={cities} />
    </div>
  );
};

export default ScreeningsFilters;
