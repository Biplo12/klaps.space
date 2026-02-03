import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { apiFetch } from "./client";

export const getScreenings = async (): Promise<IScreeningWithMovie[]> => {
  const screenings = await apiFetch<IScreeningWithMovie[]>("/screenings");
  return screenings;
};
