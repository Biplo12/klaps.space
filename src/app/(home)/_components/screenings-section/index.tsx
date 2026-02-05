import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { ICity } from "@/interfaces/ICities";
import ScreeningsSectionContent from "./screenings-section-content";

interface ScreeningsSectionProps {
  screenings: IScreeningWithMovie[];
  cities: ICity[];
}

const ScreeningsSection: React.FC<ScreeningsSectionProps> = ({
  screenings,
  cities,
}) => {
  return (
    <section
      id="seanse"
      className="bg-black px-8 py-16 lg:px-16 lg:py-24"
      aria-labelledby="screenings-section-heading"
    >
      <div className="max-w-7xl mx-auto">
        <ScreeningsSectionContent screenings={screenings} cities={cities} />
      </div>
    </section>
  );
};

export default ScreeningsSection;
