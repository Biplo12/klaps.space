"use client";

import { useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const CITY_PARAM_KEY = "city";

interface UseCityParamReturn {
  selectedCityId: string;
  handleCityChange: (value: string | null) => void;
}

export const useCityParam = (): UseCityParamReturn => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCityId = searchParams.get(CITY_PARAM_KEY) ?? "";

  const handleCityChange = useCallback(
    (value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete(CITY_PARAM_KEY);
      } else {
        params.set(CITY_PARAM_KEY, value);
      }

      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

      router.push(newUrl, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  return {
    selectedCityId,
    handleCityChange,
  };
};
