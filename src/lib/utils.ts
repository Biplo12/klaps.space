import { IMovieGenre } from "@/interfaces/IMovies";
import { IScreening } from "@/interfaces/IScreenings";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatGeneres = (genres: IMovieGenre[]) => {
  const MAX_GENRES = 2;
  const formattedGenres = genres
    .slice(0, MAX_GENRES)
    .map((genre) => genre.genre.name)
    .join("/");

  return formattedGenres;
};

export const formatDuration = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}h ${minutes}m`;
};

export const getTodayDatePL = () =>
  new Date().toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

export const getHoursFromScreenings = (screenings: IScreening[]) => {
  return screenings.map(
    (s) =>
      new Date(s.date).getHours() +
      ":" +
      new Date(s.date).getMinutes().toString().padStart(2, "0")
  );
};

export const getUniqueCityNamesFromScreenings = (screenings: IScreening[]) => {
  const names = screenings
    .map((s) => s.cityName)
    .filter((name): name is string => Boolean(name));
  return [...new Set(names)];
};

export const sortHoursChronologically = (hours: string[]) =>
  [...hours].sort((a, b) => {
    const [aH, aM] = a.split(":").map(Number);
    const [bH, bM] = b.split(":").map(Number);
    return aH * 60 + aM - (bH * 60 + bM);
  });
