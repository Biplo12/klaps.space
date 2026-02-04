import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { apiFetch } from "./client";

interface GetScreeningsParams {
  date?: string;
  cityId?: number;
  limit?: number;
}

export const getScreenings = async (
  params: GetScreeningsParams = {}
): Promise<IScreeningWithMovie[]> => {
  const screenings = await apiFetch<IScreeningWithMovie[]>("/screenings", {
    params: {
      date: params.date ?? "",
      cityId: params.cityId?.toString() ?? "",
      limit: params.limit?.toString() ?? "",
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
