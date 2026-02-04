import React from "react";
import { CalendarDays } from "lucide-react";

const ScreeningsCalendarBanner: React.FC = () => {
  return (
    <div
      className="bg-black w-96 flex items-center gap-2 p-8"
      role="banner"
      aria-label="Kalendarz seansów"
    >
      <CalendarDays className="w-10 h-10 text-white" aria-hidden="true" />
      <span className="text-white text-3xl font-bold">Kalendarz seansów</span>
    </div>
  );
};

export default ScreeningsCalendarBanner;
