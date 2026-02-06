"use client";

import { useCallback, useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

const CITY_PARAM_KEY = "city";

interface UseCityParamReturn {
  selectedCityId: string;
  handleCityChange: (value: string | null) => void;
}

export const useCityParam = (): UseCityParamReturn => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [selectedCityId, setSelectedCityId] = useState(
    searchParams.get(CITY_PARAM_KEY) ?? ""
  );

  // Sync state with URL on external URL changes
  useEffect(() => {
    const urlCityId = searchParams.get(CITY_PARAM_KEY) ?? "";
    setSelectedCityId(urlCityId);
  }, [searchParams]);

  const handleCityChange = useCallback(
    (value: string | null) => {
      const newValue = value ?? "";
      setSelectedCityId(newValue);

      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete(CITY_PARAM_KEY);
      } else {
        params.set(CITY_PARAM_KEY, value);
      }

      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

      // Update URL without page reload
      window.history.replaceState(null, "", newUrl);
    },
    [searchParams, pathname]
  );

  return {
    selectedCityId,
    handleCityChange,
  };
};
