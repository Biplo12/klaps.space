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
