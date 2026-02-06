import React from "react";
import EmptyState from "@/components/common/empty-state";
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
    return <EmptyState message="Brak seansów do wyświetlenia." />;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 list-none">
      {screenings.map((screening, index) => (
        <li key={screening.movie.id}>
          <ScreeningsSectionCard
            screening={screening}
            selectedDate={selectedDate}
          />
        </li>
      ))}
    </ul>
  );
};

export default ScreeningsSectionList;
