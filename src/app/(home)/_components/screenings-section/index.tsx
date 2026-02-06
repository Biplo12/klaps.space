import React from "react";
import ScreeningsSectionContent from "./screenings-section-content";
import { getScreenings } from "@/lib/screenings";
import { getCities } from "@/lib/cities";

interface ScreeningsSectionProps {
  searchParams?: {
    city?: string;
    genre?: string;
    date?: string;
  };
}

const ScreeningsSection = async ({ searchParams }: ScreeningsSectionProps) => {
  const [screenings, cities] = await Promise.all([
    getScreenings({
      cityId: searchParams?.city,
      genreId: searchParams?.genre,
      date: searchParams?.date,
    }),
    getCities(),
  ]);

  return (
    <section id="seanse" className="bg-black px-8 py-16">
      <div className="max-w-[1400px] mx-auto">
        <ScreeningsSectionContent
          initialScreenings={screenings}
          cities={cities}
        />
      </div>
    </section>
  );
};

export default ScreeningsSection;
