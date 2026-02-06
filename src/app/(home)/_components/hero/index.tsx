import React from "react";
import Image from "next/image";
import HeroContent from "./hero-content";
import { getRandomScreening } from "@/lib/screenings";

const Hero: React.FC = async () => {
  const randomScreening = await getRandomScreening();
  const movieTitle = randomScreening.movie.title;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full bg-black relative overflow-hidden">
      <HeroContent screening={randomScreening} />

      <div className="absolute inset-0 z-1">
        <Image
          src={randomScreening.movie.backdropUrl ?? ""}
          alt={`Plakat filmowy: ${movieTitle}`}
          width={1920}
          height={1080}
          className="w-full h-full object-cover md:max-w-6xl md:ml-auto md:absolute md:right-0 md:top-0"
          priority
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent md:hidden pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hidden md:block bg-[linear-gradient(to_right,black_0%,rgba(0,0,0,0.8)_35%,rgba(0,0,0,0.3)_60%,transparent_100%)] pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;
