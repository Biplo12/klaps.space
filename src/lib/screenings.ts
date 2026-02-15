import {
  IScreening,
  IScreeningGroup,
  IScreeningDetail,
  IRandomScreening,
} from "@/interfaces/IScreenings";
import { PaginatedResponse } from "@/interfaces/IMovies";
import { apiFetch } from "./client";

interface GetScreeningsParams {
  cityId?: string | null;
  cinemaId?: string | null;
  genreId?: string | null;
  dateFrom?: string | null;
  dateTo?: string | null;
  limit?: number;
}

interface GetPaginatedScreeningsParams extends GetScreeningsParams {
  page?: number;
}

interface GetMovieScreeningsParams {
  movieId: string;
  cityId?: string | null;
  limit?: number;
}

export const getScreenings = async (
  params: GetScreeningsParams = {},
): Promise<IScreeningGroup[]> => {
  const response = await apiFetch<
    IScreeningGroup[] | PaginatedResponse<IScreeningGroup>
  >("/screenings", {
    params: {
      cityId: params.cityId ?? "",
      cinemaId: params.cinemaId ?? "",
      genreId: params.genreId ?? "",
      dateFrom: params.dateFrom ?? "",
      dateTo: params.dateTo ?? "",
      limit: params.limit?.toString() ?? "10",
    },
  });

  return Array.isArray(response) ? response : [...response.data];
};

export const getMovieScreenings = async (
  params: GetMovieScreeningsParams,
): Promise<IScreening[]> => {
  const response = await apiFetch<
    IScreening[] | PaginatedResponse<IScreening>
  >("/screenings", {
    params: {
      movieId: params.movieId,
      cityId: params.cityId ?? "",
      limit: params.limit?.toString() ?? "100",
    },
  });

  return Array.isArray(response) ? response : [...response.data];
};

export const getPaginatedScreenings = async (
  params: GetPaginatedScreeningsParams = {},
): Promise<PaginatedResponse<IScreeningGroup> | IScreeningGroup[]> => {
  const response = await apiFetch<
    PaginatedResponse<IScreeningGroup> | IScreeningGroup[]
  >("/screenings", {
    params: {
      cityId: params.cityId ?? "",
      cinemaId: params.cinemaId ?? "",
      genreId: params.genreId ?? "",
      dateFrom: params.dateFrom ?? "",
      dateTo: params.dateTo ?? "",
      page: (params.page ?? 1).toString(),
      limit: (params.limit ?? 24).toString(),
    },
  });

  return response;
};

export const getScreeningById = async (
  id: number,
): Promise<IScreeningDetail> => {
  const screening = await apiFetch<IScreeningDetail>(`/screenings/${id}`);
  return screening;
};

export const getRandomScreening = async (): Promise<IRandomScreening> => {
  const screening = await apiFetch<IRandomScreening>(
    "/screenings/random-screening",
  );

  if (!screening) {
    throw new Error("No screening found");
  }

  return screening;
};

export const groupScreeningsByCinema = (
  screenings: IScreening[],
): IScreening[][] => {
  const grouped = new Map<number, IScreening[]>();

  for (const screening of screenings) {
    const existing = grouped.get(screening.cinema.id) ?? [];
    existing.push(screening);
    grouped.set(screening.cinema.id, existing);
  }

  return Array.from(grouped.values());
};
