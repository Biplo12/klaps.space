"use client";

import { useState, useEffect, useCallback } from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";

interface UseScreeningsParams {
  initialScreenings: IScreeningWithMovie[];
  cityId: string;
  genreId: string;
}

interface UseScreeningsReturn {
  screenings: IScreeningWithMovie[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useScreenings = ({
  initialScreenings,
  cityId,
  genreId,
}: UseScreeningsParams): UseScreeningsReturn => {
  const [screenings, setScreenings] =
    useState<IScreeningWithMovie[]>(initialScreenings);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchScreenings = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (cityId) params.set("cityId", cityId);
      if (genreId) params.set("genreId", genreId);

      const queryString = params.toString();
      const url = queryString
        ? `/api/screenings?${queryString}`
        : "/api/screenings";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch screenings");
      }

      const data = await response.json();
      setScreenings(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, [cityId, genreId]);

  // Refetch when filters change (but not on initial mount)
  useEffect(() => {
    // Skip initial fetch if we have initial data and no filters
    const hasFilters = cityId || genreId;
    if (!hasFilters && initialScreenings.length > 0) {
      return;
    }

    fetchScreenings();
  }, [cityId, genreId, fetchScreenings, initialScreenings.length]);

  return {
    screenings,
    isLoading,
    error,
    refetch: fetchScreenings,
  };
};
