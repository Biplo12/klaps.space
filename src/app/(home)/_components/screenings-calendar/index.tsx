import { cn } from "@/lib/utils";
import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import ScreeningsCalendarBanner from "./screenings-calendar-banner";
import ScreeningsCalendarHeader from "./screenings-calendar-header";
import { ScreeningsCalendarList } from "./screenings-calendar-list";

interface ScreeningsCallendarProps {
  className?: string;
  screenings: IScreeningWithMovie[];
}

const ScreeningsCallendar: React.FC<ScreeningsCallendarProps> = ({
  className,
  screenings,
}) => {
  return (
    <div className={cn(className, "")}>
      <ScreeningsCalendarBanner />

      <div className="bg-white w-96 flex items-center gap-2 p-8 flex-col">
        <ScreeningsCalendarHeader />
        <ScreeningsCalendarList screenings={screenings} />
      </div>
    </div>
  );
};

export default ScreeningsCallendar;
