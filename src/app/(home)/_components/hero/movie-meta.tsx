import React from "react";
import { formatDuration } from "@/lib/utils";

const META_SEPARATOR = " · ";

type MovieMetaProps = {
  duration: number;
  productionYear: number;
  formattedGenres: string;
};

const MovieMeta: React.FC<MovieMetaProps> = ({
  duration,
  productionYear,
  formattedGenres,
}) => {
  const durationText = formatDuration(duration);

  return (
    <div
      className="flex flex-wrap items-baseline gap-x-1 text-white/90 text-xl font-light tracking-wide"
      role="list"
      aria-label="Szczegóły filmu"
    >
      <span className="font-medium text-white">{durationText}</span>
      <span aria-hidden="true">{META_SEPARATOR}</span>
      <span>{productionYear}</span>
      <span aria-hidden="true">{META_SEPARATOR}</span>
      <span>{formattedGenres}</span>
    </div>
  );
};

export default MovieMeta;
