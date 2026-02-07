"use client";

import { useCallback, useMemo } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ICity } from "@/interfaces/ICities";

const ALL_CITIES_OPTION = { id: null, name: "Wszystkie miasta" };
const CITY_PARAM_KEY = "city";

interface UseCityParamReturn {
  selectedCity: ICity | null;
  handleCityChange: (value: number | null) => void;
  options: { id: number | null; name: string }[];
}

export const useCityParam = (cities: ICity[]): UseCityParamReturn => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const options = useMemo(
    () => [
      ALL_CITIES_OPTION,
      ...cities.map((c) => ({ id: c.id, name: c.name })),
    ],
    [cities]
  );

  const selectedCity = useMemo(() => {
    const cityParam = searchParams.get(CITY_PARAM_KEY);
    if (!cityParam) return null;

    return cities.find((c) => c.id.toString() === cityParam) ?? null;
  }, [cities, searchParams]);

  const handleCityChange = useCallback(
    (value: number | null) => {
      console.log({ value });
      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete(CITY_PARAM_KEY);
      } else {
        params.set(CITY_PARAM_KEY, value.toString());
      }

      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

      router.replace(newUrl);
    },
    [searchParams, pathname, router]
  );

  return {
    selectedCity,
    handleCityChange,
    options,
  };
};
