import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { getHoursFromScreenings } from "@/lib/utils";
import Link from "next/link";
import MoviePoster from "@/components/common/movie-poster";

interface ScreeningsCalendarItemProps {
  screening: IScreeningWithMovie;
}

const ScreeningsCalendarItem: React.FC<ScreeningsCalendarItemProps> = ({
  screening,
}) => {
  const screenings = screening.screenings.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const uniqueScreenings = screenings.filter(
    (s, index, self) => index === self.findIndex((t) => t.date === s.date)
  );

  return (
    <div className="flex gap-2 items-center">
      <MoviePoster
        posterUrl={screening.movie.posterUrl ?? ""}
        width={100}
        height={150}
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium">{screening.movie.title}</h3>
        {screening.movie.productionYear && (
          <span className="text-sm">{screening.movie.productionYear}</span>
        )}

        <div className="flex gap-2">
          {uniqueScreenings.map((s) => (
            <Link key={s.id} href={s.url}>
              {getHoursFromScreenings([s])}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreeningsCalendarItem;
