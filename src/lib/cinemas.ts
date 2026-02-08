import { ICinema } from "@/interfaces/ICinema";
import { apiFetch } from "./client";

interface GetCinemasParams {
  cityId?: string | null;
  limit?: number;
}

export const getCinemas = async (
  params: GetCinemasParams = {}
): Promise<ICinema[]> => {
  const cinemas = await apiFetch<ICinema[]>("/cinemas", {
    params: {
      cityId: params.cityId ?? "",
      limit: params.limit?.toString() ?? "50",
    },
  });

  return cinemas;
};

export const getCinemaById = async (id: string): Promise<ICinema> => {
  const cinema = await apiFetch<ICinema>(`/cinemas/${id}`);
  return cinema;
};

export const groupCinemasByCity = (cinemas: ICinema[]) => {
  const grouped = new Map<string, ICinema[]>();

  for (const cinema of cinemas) {
    const city = cinema.cityName;
    const existing = grouped.get(city);

    if (existing) {
      existing.push(cinema);
    } else {
      grouped.set(city, [cinema]);
    }
  }

  const sorted = new Map(
    [...grouped.entries()].sort((a, b) => b[1].length - a[1].length)
  );

  return sorted;
};
