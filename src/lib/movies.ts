import { IMovie } from "../interfaces/IMovies";
import { apiFetch } from "./client";

export const getMovies = async (): Promise<IMovie[]> => {
  const movies = await apiFetch<IMovie[]>("/movies");
  return movies;
};
