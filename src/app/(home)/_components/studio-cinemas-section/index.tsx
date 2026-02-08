import React from "react";
import Link from "next/link";
import StudioCinemasHeader from "./studio-cinemas-header";
import StudioCinemasList from "./studio-cinemas-list";
import { ICinema } from "@/interfaces/ICinema";

interface StudioCinemasSectionProps {
  cinemas: ICinema[];
}

const StudioCinemasSection: React.FC<StudioCinemasSectionProps> = ({
  cinemas,
}) => {
  return (
    <section className="bg-black px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <StudioCinemasHeader />
        <StudioCinemasList cinemas={cinemas} />

        <Link
          href="/kina"
          className="text-neutral-400 text-sm md:text-base uppercase tracking-widest transition-colors duration-200 hover:text-red-800 focus-visible:text-red-800 focus-visible:outline-none mt-16 md:mt-20"
        >
          Zobacz wszystkie kina →
        </Link>
      </div>
    </section>
  );
};

export default StudioCinemasSection;
