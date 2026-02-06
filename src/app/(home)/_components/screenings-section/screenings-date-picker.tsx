"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useDateParam } from "@/hooks/use-date-param";
import { cn, formatDateLabel, getDateString } from "@/lib/utils";

interface ScreeningsDatePickerProps {
  dates: string[];
  className?: string;
}

const ScreeningsDatePicker: React.FC<ScreeningsDatePickerProps> = ({
  dates,
  className,
}) => {
  const normalizedDates = dates.map((d) => getDateString(new Date(d)));
  const uniqueDates = [...new Set(normalizedDates)].sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  const { selectedDate, handleDateChange } = useDateParam(uniqueDates[0]);

  if (uniqueDates.length === 0) return null;

  const handleDateClick = (dateStr: string) => {
    if (dateStr === selectedDate) return;
    handleDateChange(dateStr);
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {uniqueDates.map((dateStr) => {
        const isSelected = dateStr === selectedDate;

        return (
          <Button
            key={dateStr}
            size="sm"
            variant={isSelected ? "tag-active" : "tag"}
            onClick={() => handleDateClick(dateStr)}
            aria-pressed={isSelected}
            aria-label={`Wybierz datę: ${formatDateLabel(dateStr)}`}
          >
            {formatDateLabel(dateStr)}
          </Button>
        );
      })}
    </div>
  );
};

export default ScreeningsDatePicker;
