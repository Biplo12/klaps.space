import React from "react";
import ScreeningsSectionContent from "./screenings-section-content";
import { getScreenings } from "@/lib/screenings";
import { getCities } from "@/lib/cities";

interface ScreeningsSectionProps {
  searchParams?: {
    city?: string;
    genre?: string;
    dateFrom?: string;
    dateTo?: string;
  };
}

const ScreeningsSection = async ({ searchParams }: ScreeningsSectionProps) => {
  const params = await searchParams;

  const [screenings, cities] = await Promise.all([
    getScreenings({
      cityId: searchParams?.city,
      genreId: params?.genre,
      dateFrom: params?.dateFrom,
      dateTo: params?.dateTo,
      limit: 30,
    }),
    getCities(),
  ]);

  return (
    <section id="seanse" className="bg-black px-8 py-16 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <ScreeningsSectionContent screenings={screenings} cities={cities} />
      </div>
    </section>
  );
};

export default ScreeningsSection;
