import React from "react";
import { GridBackground } from "@/components/shared/grid-background";
import ScreeningsFilters from "./partials/screenings-filters";
import ScreeningsList from "./partials/screenings-list";

const Screenings: React.FC = async () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col bg-banana-yellow">
      <GridBackground />

      <div className="relative z-10 flex w-full flex-col items-start justify-start gap-8 p-24">
        <h2 className="text-7xl font-bold uppercase font-oswald text-blood-red">
          Co grają?
        </h2>

        <ScreeningsFilters />
        <ScreeningsList />
      </div>
    </section>
  );
};

export default Screenings;
