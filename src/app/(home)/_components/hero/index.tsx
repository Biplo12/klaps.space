import React from "react";
import Image from "next/image";
import HeroContent from "./hero-content";
import { getRandomScreening } from "@/lib/screenings";
import ScreeningsCallendar from "../screenings-calendar";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";

interface HeroProps {
  screenings: IScreeningWithMovie[];
}

const Hero: React.FC<HeroProps> = async ({ screenings }) => {
  const randomScreening = await getRandomScreening();

  return (
    <section className="flex flex-col items-center justify-center h-screen w-full bg-black">
      <HeroContent screening={randomScreening} />

      <Image
        src={randomScreening.movie.backdropUrl ?? ""}
        alt="Hero"
        width={1920}
        height={1080}
        className="w-full h-full object-cover max-w-6xl mx-auto absolute right-0 top-0"
      />

      {/* <ScreeningsCallendar
        className="absolute bottom-0 right-0"
        screenings={screenings}
      /> */}
    </section>
  );
};

export default Hero;
