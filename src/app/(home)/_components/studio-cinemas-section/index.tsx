import React from "react";
import StudioCinemasList from "./studio-cinemas-list";
import { ReadMoreLink } from "@/components/ui/read-more-link";
import { ICinema } from "@/interfaces/ICinema";
import SectionHeader from "@/components/common/section-header";

interface StudioCinemasSectionProps {
  cinemas: ICinema[];
}

const StudioCinemasSection: React.FC<StudioCinemasSectionProps> = ({
  cinemas,
}) => {
  return (
    <section className="bg-black px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <SectionHeader
          prefix="Lista kin"
          title="Kina studyjne w Polsce"
          description="Miejsca, w których kino jest czymś więcej niż rozrywką."
        />
        <StudioCinemasList cinemas={cinemas} />

        <ReadMoreLink
          href="/kina"
          label="Zobacz wszystkie kina"
          ariaLabel="Zobacz pełną listę kin studyjnych"
        />
      </div>
    </section>
  );
};

export default StudioCinemasSection;
