import React from "react";
import Link from "next/link";
import { IScreening } from "@/interfaces/IScreenings";
import { getHoursFromScreenings, sortHoursChronologically } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScreeningHoursProps {
  screenings: IScreening[];
}

const ScreeningHours: React.FC<ScreeningHoursProps> = ({ screenings }) => {
  if (screenings.length === 0) {
    return null;
  }

  const sortedScreenings = [...screenings].sort((a, b) => {
    const timeA = getHoursFromScreenings([a])[0];
    const timeB = getHoursFromScreenings([b])[0];
    const sorted = sortHoursChronologically([timeA, timeB]);
    return sorted[0] === timeA ? -1 : 1;
  });

  const hasDuplicateCinemas =
    new Set(sortedScreenings.map((s) => s.cinemaId)).size > 1;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {sortedScreenings.map((screening) => {
        const time = getHoursFromScreenings([screening])[0];
        const cinemaLabel =
          screening.cinemaName ?? `Kino #${screening.cinemaId}`;

        return (
          <Button key={screening.id} variant="secondary" size="sm" asChild>
            <Link
              href={screening.url}
              target="_blank"
              rel="noopener noreferrer"
              title={hasDuplicateCinemas ? cinemaLabel : undefined}
              aria-label={`${time}${
                hasDuplicateCinemas ? ` – ${cinemaLabel}` : ""
              }`}
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
