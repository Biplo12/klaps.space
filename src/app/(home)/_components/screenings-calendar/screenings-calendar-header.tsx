"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTodayDatePL } from "@/lib/utils";

type ScreeningsCalendarHeaderProps = {
  dateLabel?: string;
  onPrevClick?: () => void;
  onNextClick?: () => void;
};

const ScreeningsCalendarHeader: React.FC<ScreeningsCalendarHeaderProps> = ({
  dateLabel = getTodayDatePL(),
  onPrevClick,
  onNextClick,
}) => {
  const handlePrevKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onPrevClick?.();
    }
  };

  const handleNextKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onNextClick?.();
    }
  };

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex flex-col">
        <span className="text-black text-xl">Seanse dzisiaj</span>
        <span className="italic text-gray-500 text-sm">{dateLabel}</span>
      </div>

      <div className="flex gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={onPrevClick}
          onKeyDown={handlePrevKeyDown}
          aria-label="Poprzedni dzień"
          tabIndex={0}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onNextClick}
          onKeyDown={handleNextKeyDown}
          aria-label="Następny dzień"
          tabIndex={0}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ScreeningsCalendarHeader;
