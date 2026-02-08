import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import SectionHeader from "@/components/common/section-header";
import ScreeningsSectionList from "@/app/(home)/_components/screenings-section/screenings-section-list";

interface CinemaScreeningsProps {
  screenings: IScreeningWithMovie[];
}

const CinemaScreenings: React.FC<CinemaScreeningsProps> = ({ screenings }) => {
  return (
    <section className="flex flex-col gap-10">
      <SectionHeader prefix="Seanse dla kina" title="Aktualne seanse" />

      <ScreeningsSectionList screenings={screenings} />
    </section>
  );
};

export default CinemaScreenings;
