import React from "react";
import Link from "next/link";
import { IScreening } from "@/interfaces/IScreenings";
import { getHoursFromScreenings, sortHoursChronologically } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ScreeningHoursProps {
  screenings: IScreening[];
  isVisible: boolean;
}

const ScreeningHours: React.FC<ScreeningHoursProps> = ({
  screenings,
  isVisible,
}) => {
  if (screenings.length === 0) {
    return null;
  }

  // Sort screenings by time
  const sortedScreenings = [...screenings].sort((a, b) => {
    const timeA = getHoursFromScreenings([a])[0];
    const timeB = getHoursFromScreenings([b])[0];
    const sorted = sortHoursChronologically([timeA, timeB]);
    return sorted[0] === timeA ? -1 : 1;
  });

  return (
    <div
      className={`flex flex-wrap gap-2 mt-2 ${!isVisible ? "sr-only" : ""}`}
      role="list"
      aria-label="Dostępne godziny seansów"
    >
      {sortedScreenings.map((screening) => {
        const time = getHoursFromScreenings([screening])[0];
        return (
          <Button
            key={screening.id}
            variant="secondary"
            size="sm"
            asChild
            role="listitem"
          >
            <Link
              href={screening.url}
              aria-label={`Seans o ${time}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {time}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default ScreeningHours;
