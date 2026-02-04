import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import ScreeningsCalendarItem from "./screenings-calendar-item";

interface ScreeningsCalendarListProps {
  screenings: IScreeningWithMovie[];
}

export const ScreeningsCalendarList: React.FC<ScreeningsCalendarListProps> = ({
  screenings,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {screenings.length === 0 ? null : (
        <ul className="list-none p-0 m-0 flex flex-col gap-2">
          {screenings.map((s) => (
            <ScreeningsCalendarItem key={s.movie.id} screening={s} />
          ))}
        </ul>
      )}
    </div>
  );
};
