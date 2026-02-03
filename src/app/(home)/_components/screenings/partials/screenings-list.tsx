import React from "react";
import { getScreenings } from "@/lib/screenings";
import ScreeningItem from "./screening-item";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";

const ScreeningsList: React.FC = async () => {
  const screenings = await getScreenings();

  return (
    <div className="grid grid-cols-8 gap-4">
      {screenings.map((screening: IScreeningWithMovie) => (
        <ScreeningItem key={screening.movie.id} screening={screening} />
      ))}
    </div>
  );
};

export default ScreeningsList;
