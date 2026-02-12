"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { IScreeningGroup } from "@/interfaces/IScreenings";
import { IGenre } from "@/interfaces/IMovies";
import {
  ScreeningsTransitionProvider,
  useScreeningsTransition,
} from "@/contexts/screenings-transition-context";
import { cn } from "@/lib/utils";
import PaginatedNav from "@/components/common/paginated-nav";
import MoviesGrid from "@/app/filmy/_components/movies-grid";
import ScreeningsPageFilters from "./screenings-page-filters";

interface ScreeningsPageInnerProps {
  screenings: readonly IScreeningGroup[];
  genres: IGenre[];
  currentPage: number;
  totalPages: number;
}

const ScreeningsPageInnerContent: React.FC<ScreeningsPageInnerProps> = ({
  screenings,
  genres,
  currentPage,
  totalPages,
}) => {
  const { isPending } = useScreeningsTransition();
  const searchParams = useSearchParams();

  const movies = screenings.map((screening) => screening.movie);

  const buildPageHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `/seanse?${params.toString()}`;
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-10 transition-opacity duration-200",
        isPending && "opacity-50 pointer-events-none",
      )}
    >
      <ScreeningsPageFilters genres={genres} />

      <MoviesGrid
        screenings={[...screenings]}
        movies={[...movies]}
        showDescription={true}
      />

      <PaginatedNav
        currentPage={currentPage}
        totalPages={totalPages}
        buildHref={buildPageHref}
      />
    </div>
  );
};

const ScreeningsPageInner: React.FC<ScreeningsPageInnerProps> = (props) => (
  <ScreeningsTransitionProvider>
    <ScreeningsPageInnerContent {...props} />
  </ScreeningsTransitionProvider>
);

export default ScreeningsPageInner;
