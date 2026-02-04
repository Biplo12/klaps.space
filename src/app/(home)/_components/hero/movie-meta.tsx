import React from "react";
import { formatDuration } from "@/lib/utils";

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
  return (
    <div className="flex gap-4" role="list" aria-label="Movie details">
      <span className="text-white text-2xl font-bold">
        {formatDuration(duration)}
      </span>
      <span className="text-white text-2xl font-bold" aria-hidden="true">
        |
      </span>

      <span className="text-white text-2xl font-bold">{productionYear}</span>

      <span className="text-white text-2xl font-bold" aria-hidden="true">
        |
      </span>
      <span className="text-white text-2xl font-bold">{formattedGenres}</span>
    </div>
  );
};

export default MovieMeta;
