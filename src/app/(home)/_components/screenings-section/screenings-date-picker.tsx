"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { formatDateLabel } from "@/lib/utils";

interface ScreeningsDatePickerProps {
  dates: string[];
  selectedDate: string | null;
  onDateChange: (date: string) => void;
  className?: string;
}

const ScreeningsDatePicker: React.FC<ScreeningsDatePickerProps> = ({
  dates,
  selectedDate,
  onDateChange,
  className,
}) => {
  const sortedDates = [...dates].sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  if (sortedDates.length === 0) return null;

  const activeDate = selectedDate ?? sortedDates[0];

  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="tablist"
      aria-label="Wybierz dzień seansów"
    >
      {sortedDates.map((dateStr) => {
        const isSelected = dateStr === activeDate;
        return (
          <button
            key={dateStr}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onDateChange(dateStr)}
            className={cn(
              "px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black",
              isSelected
                ? "bg-blood-red text-white border border-blood-red"
                : "bg-transparent text-white/80 border border-white/30 hover:border-white/50 hover:text-white"
            )}
          >
            {formatDateLabel(dateStr)}
          </button>
        );
      })}
    </div>
  );
};

export default ScreeningsDatePicker;
