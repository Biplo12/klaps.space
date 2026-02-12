"use client";

import React, { useState, useMemo } from "react";
import { IScreening } from "@/interfaces/IScreenings";
import EmptyState from "@/components/common/empty-state";
import MovieScreeningRow from "./movie-screening-row";
import { groupScreeningsByCinema } from "@/lib/screenings";
import { getDateString } from "@/lib/utils";
import DateTabs from "@/components/common/date-tabs";

type MovieScreeningsProps = {
  screenings: IScreening[];
};

const getUniqueDates = (screenings: IScreening[]): string[] => {
  const dates = new Set<string>();

  for (const screening of screenings) {
    dates.add(screening.date);
  }

  return Array.from(dates).sort();
};

const getDefaultDate = (availableDates: string[]): string => {
  const today = getDateString(new Date());

  if (availableDates.includes(today)) return today;

  return availableDates[0] ?? today;
};

const MovieScreenings: React.FC<MovieScreeningsProps> = ({ screenings }) => {
  const availableDates = useMemo(
    () => getUniqueDates(screenings),
    [screenings]
  );

  const [selectedDate, setSelectedDate] = useState<string | null>(() =>
    getDefaultDate(availableDates)
  );

  const filteredScreenings = useMemo(
    () =>
      selectedDate
        ? screenings.filter((s) => s.date === selectedDate)
        : screenings,
    [screenings, selectedDate]
  );

  const groupedScreenings = useMemo(
    () => groupScreeningsByCinema(filteredScreenings),
    [filteredScreenings]
  );

  if (screenings.length === 0) {
    return (
      <section className="flex flex-col gap-6">
        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
          Seanse
        </h2>
        <EmptyState
          headline="Brak nadchodzących seansów"
          description="Aktualnie nie ma zaplanowanych seansów dla tego filmu."
        />
      </section>
    );
  }

  const handleDateChange = (date: string | null) => {
    setSelectedDate(date);
  };

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
        Seanse
      </h2>

      <DateTabs
        dates={availableDates}
        selectedDate={selectedDate ?? availableDates[0] ?? ""}
        onDateChange={handleDateChange}
        label="Data seansów"
      />

      {groupedScreenings.length === 0 ? (
        <EmptyState
          headline="Brak seansów w tym dniu"
          description="Wybierz inną datę, aby zobaczyć dostępne seanse."
        />
      ) : (
        <div className="flex flex-col border-t border-white/10">
          {groupedScreenings.map((cinemaScreenings) => (
            <MovieScreeningRow
              key={cinemaScreenings[0].cinema.id}
              screenings={cinemaScreenings}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MovieScreenings;
