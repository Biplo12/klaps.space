import React from "react";
import { cn, formatDuration } from "@/lib/utils";

const META_SEPARATOR = " · ";

interface MovieMetaProps {
  duration: number;
  productionYear: number;
  formattedGenres: string;
  className?: string;
}

const MovieMeta: React.FC<MovieMetaProps> = ({
  duration,
  productionYear,
  formattedGenres,
  className,
}) => {
  const durationText = formatDuration(duration);

  return (
    <div
      className={cn(
        "flex flex-wrap items-baseline gap-x-1 text-[#B3B3B3] text-xl font-light tracking-normal",
        className
      )}
    >
      {durationText && (
        <span className="font-medium text-[#B3B3B3]">{durationText}</span>
      )}
      {durationText && productionYear && <span>{META_SEPARATOR}</span>}
      {productionYear && <span>{productionYear}</span>}
      {productionYear && formattedGenres && <span>{META_SEPARATOR}</span>}
      {formattedGenres && (
        <span className="uppercase tracking-widest">{formattedGenres}</span>
      )}
    </div>
  );
};

export default MovieMeta;
