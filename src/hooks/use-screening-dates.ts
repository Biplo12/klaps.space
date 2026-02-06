"use client";

import { useMemo } from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";

interface UseScreeningDatesReturn {
  dates: string[];
  activeDate: string;
}

export const useScreeningDates = (
  screenings: IScreeningWithMovie[]
): UseScreeningDatesReturn => {
  const dates = useMemo(() => {
    const allDates = screenings.flatMap((s) =>
      s.screenings.map((screening) => screening.date.split("T")[0])
    );
    return [...new Set(allDates)].sort();
  }, [screenings]);

  const activeDate = dates[0] ?? "";

  return {
    dates,
    activeDate,
  };
};
