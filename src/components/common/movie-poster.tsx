"use client";

import React, { useState } from "react";
import Image from "next/image";
import NoMoviePoster from "./no-movie-poster";

interface MoviePosterProps {
  posterUrl: string;
  width: number;
  height: number;
  className?: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({
  posterUrl,
  width,
  height,
  className,
}) => {
  const [isError, setIsError] = useState(false);
  return !isError ? (
    <Image
      src={posterUrl ?? ""}
      alt={posterUrl}
      width={width}
      height={height}
      className={className}
      onError={() => {
        setIsError(true);
      }}
    />
  ) : (
    <NoMoviePoster width={width} height={height} />
  );
};

export default MoviePoster;
