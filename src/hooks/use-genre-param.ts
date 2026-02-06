"use client";

import { useCallback, useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

const GENRE_PARAM_KEY = "genre";

interface UseGenreParamReturn {
  selectedGenreId: string;
  handleGenreChange: (value: string | null) => void;
}

export const useGenreParam = (): UseGenreParamReturn => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const initialGenreId = searchParams.get(GENRE_PARAM_KEY) ?? "";
  const [selectedGenreId, setSelectedGenreId] = useState(initialGenreId);

  // Sync state with URL on initial load or external URL changes
  useEffect(() => {
    const urlGenreId = searchParams.get(GENRE_PARAM_KEY) ?? "";
    setSelectedGenreId(urlGenreId);
  }, [searchParams]);

  const handleGenreChange = useCallback(
    (value: string | null) => {
      setSelectedGenreId(value ?? "");

      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete(GENRE_PARAM_KEY);
      } else {
        params.set(GENRE_PARAM_KEY, value);
      }

      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

      // Update URL without triggering navigation/rerender
      window.history.replaceState(null, "", newUrl);
    },
    [searchParams, pathname]
  );

  return {
    selectedGenreId,
    handleGenreChange,
  };
};
