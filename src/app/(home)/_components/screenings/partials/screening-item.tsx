import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TicketIcon } from "lucide-react";

const MAX_GENRES_TO_SHOW = 2;

interface ScreeningItemProps {
  screening: IScreeningWithMovie;
}

const ScreeningItem: React.FC<ScreeningItemProps> = ({ screening }) => {
  const genres = screening?.movie?.movies_genres
    .map((genre) => genre.genre.name)
    .slice(0, MAX_GENRES_TO_SHOW)
    .join("/");

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-black">
      <Image
        src={screening.movie.posterUrl || ""}
        alt={screening.movie.title}
        width={100}
        height={100}
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="font-bold uppercase text-center">
          {screening.movie.title}
        </h3>

        <div className="flex items-center justify-center gap-2">
          <span>{screening.movie.productionYear}</span>
          <span>·</span>
          <span>{genres}</span>
          <span>·</span>
          <span>{screening.movie.duration} min</span>
        </div>
      </div>

      <Button className="bg-golden-yellow text-blood-red uppercase rounded-xl hover:bg-golden-yellow/80 cursor-pointer">
        <TicketIcon /> <span>Zobacz więcej</span>
      </Button>
    </div>
  );
};

export default ScreeningItem;
