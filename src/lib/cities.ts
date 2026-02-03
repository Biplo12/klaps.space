import { ICity } from "@/interfaces/ICities";
import { apiFetch } from "./client";

export const getCities = async (): Promise<ICity[]> => {
  const cities = await apiFetch<ICity[]>("/cities");
  return cities;
};
