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

export const createDateByDaysIncrement = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return getDateString(date);
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

export const getDateString = (date: Date) =>
  date.toISOString().split("T")[0] ?? "";

export const isToday = (dateStr: string) => {
  const d = new Date(dateStr);
  const today = new Date();
  return getDateString(d) === getDateString(today);
};

export const isTomorrow = (dateStr: string) => {
  const d = new Date(dateStr);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return getDateString(d) === getDateString(tomorrow);
};

export const formatDateLabel = (dateStr: string) => {
  if (isToday(dateStr)) return "Dziś";
  if (isTomorrow(dateStr)) return "Jutro";
  const d = new Date(dateStr);
  const dayNames = ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"];
  const day = dayNames[d.getDay()];
  const date = d.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
  });
  return `${day} ${date}`;
};

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
};

export const getTitleSizeClasses = (title: string): string => {
  const length = title.length;

  // Short titles (< 15 chars): largest size ~128px
  if (length < 15) {
    return "text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[128px] leading-tight md:leading-[1.15]";
  }

  // Medium-short titles (15-25 chars): ~108px
  if (length < 25) {
    return "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[108px] leading-tight md:leading-[1.15]";
  }

  // Medium titles (25-35 chars): ~90px
  if (length < 35) {
    return "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[90px] leading-tight md:leading-[1.2]";
  }

  // Long titles (35-50 chars): ~72px
  if (length < 50) {
    return "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] leading-tight md:leading-[1.25]";
  }

  // Very long titles (50+ chars): smallest size ~56px
  return "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[56px] leading-tight md:leading-[1.3]";
};
