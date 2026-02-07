"use client";

import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useDateParam } from "@/hooks/use-date-param";
import { cn, formatDateLabel, getDateString } from "@/lib/utils";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";

const DAYS_TO_RENDER = 7;

interface ScreeningsDatePickerProps {
  screenings: IScreeningWithMovie[];
  className?: string;
}

const ScreeningsDatePicker: React.FC<ScreeningsDatePickerProps> = ({
  screenings,
  className,
}) => {
  const screeningDatesSet = useMemo(() => {
    const allDates = screenings.flatMap((s) =>
      s.screenings.map((sc) => getDateString(new Date(sc.date)))
    );
    return new Set(allDates);
  }, [screenings]);

  const next7Days = useMemo(() => {
    const today = new Date();
    return Array.from({ length: DAYS_TO_RENDER }).map((_, index) => {
      const day = new Date(today);
      day.setDate(today.getDate() + index);
      return getDateString(day);
    });
  }, []);

  const firstAvailableDate = next7Days.find((d) => screeningDatesSet.has(d));
  const { dateFrom, handleDateChange } = useDateParam(firstAvailableDate);

  const handleDateClick = (dateStr: string) => {
    if (dateStr === dateFrom) return;
    handleDateChange(dateStr);
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {next7Days.map((dateStr) => {
        const hasScreenings = screeningDatesSet.has(dateStr);
        const isSelected = dateStr === dateFrom;

        return (
          <Button
            key={dateStr}
            size="sm"
            variant={isSelected ? "tag-active" : "tag"}
            onClick={() => handleDateClick(dateStr)}
            disabled={!hasScreenings}
            aria-label={`Wybierz datę ${formatDateLabel(dateStr)}`}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formatDateLabel(dateStr)}
          </Button>
        );
      })}
    </div>
  );
};

export default ScreeningsDatePicker;
