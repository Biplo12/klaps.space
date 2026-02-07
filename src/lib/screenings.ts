import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { apiFetch } from "./client";

interface GetScreeningsParams {
  cityId?: string | null;
  genreId?: string | null;
  dateFrom?: string | null;
  dateTo?: string | null;
  limit?: number;
}

export const getScreenings = async (
  params: GetScreeningsParams = {}
): Promise<IScreeningWithMovie[]> => {
  const screenings = await apiFetch<IScreeningWithMovie[]>("/screenings", {
    params: {
      cityId: params.cityId ?? "",
      genreId: params.genreId ?? "",
      date: params.dateFrom ?? "",
      limit: params.limit?.toString() ?? "10",
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
