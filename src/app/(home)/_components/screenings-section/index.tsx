import React from "react";
import ScreeningsSectionContent from "./screenings-section-content";
import { getScreenings } from "@/lib/screenings";
import { getGenres } from "@/lib/genres";
import { getPreferredCityId } from "@/lib/get-preferred-city";

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
  const cityId = await getPreferredCityId(params);

  const [screenings, genres] = await Promise.all([
    getScreenings({
      cityId,
      genreId: params?.genre,
      dateFrom: params?.dateFrom,
      dateTo: params?.dateTo,
      limit: 12,
    }),
    getGenres(),
  ]);

  return (
    <section id="seanse" className="bg-black px-8 py-16 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <ScreeningsSectionContent screenings={screenings} genres={genres} />
      </div>
    </section>
  );
};

export default ScreeningsSection;
