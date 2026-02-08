import { IMultiCityMovie } from "@/interfaces/IMovies";
import { apiFetch } from "./client";

interface GetMultiCityMoviesParams {
  limit?: number;
}

export const getMultiCityMovies = async (
  params: GetMultiCityMoviesParams = {}
): Promise<IMultiCityMovie[]> => {
  const movies = await apiFetch<IMultiCityMovie[]>("/movies/multi-city", {
    params: {
      limit: params.limit?.toString() ?? "10",
    },
  });
  return movies;
};
