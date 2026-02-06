import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { apiFetch } from "./client";

interface GetScreeningsParams {
  cityId?: string | null;
  genreId?: string | null;
  date?: string | null;
}

export const getScreenings = async (
  params: GetScreeningsParams = {}
): Promise<IScreeningWithMovie[]> => {
  const screenings = await apiFetch<IScreeningWithMovie[]>("/screenings", {
    params: {
      cityId: params.cityId ?? "",
      genreId: params.genreId ?? "",
      date: params.date ?? "",
    },
  });

  return screenings;
};

export const getRandomScreening = async (): Promise<IScreeningWithMovie> => {
  const screening = await apiFetch<IScreeningWithMovie>(
    "/screenings/random-screening"
  );
  if (!screening) {
    throw new Error("No screening found");
  }

  return screening;
};
