import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import ScreeningsSectionCard from "./screenings-section-card";

interface ScreeningsSectionListProps {
  screenings: IScreeningWithMovie[];
  selectedDate: string;
}

const ScreeningsSectionList: React.FC<ScreeningsSectionListProps> = ({
  screenings,
  selectedDate,
}) => {
  if (screenings.length === 0) {
    return (
      <p className="text-[#B3B3B3] italic py-12">
        Brak seansów do wyświetlenia.
      </p>
    );
  }

  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 list-none p-0 m-0"
      role="list"
    >
      {screenings.map((screening, index) => (
        <li key={screening.movie.id}>
          <ScreeningsSectionCard
            screening={screening}
            selectedDate={selectedDate}
            isRecommended={index === 0}
          />
        </li>
      ))}
    </ul>
  );
};

export default ScreeningsSectionList;
