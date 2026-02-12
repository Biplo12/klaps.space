"use client";

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { ICity } from "@/interfaces/ICities";
import { PREFERRED_CITY_KEY, setPreferredCityCookie } from "@/lib/city-storage";

export type CityOption = { value: number | null; label: string };

const ALL_CITIES_OPTION: CityOption = {
  value: null,
  label: "Wszystkie miasta",
};

interface CityContextValue {
  cityId: number | null;
  cityName: string;
  isHydrated: boolean;
  setCityId: (cityId: number | null) => void;
  options: CityOption[];
}

const CityContext = createContext<CityContextValue | null>(null);

export const usePreferredCity = (): CityContextValue => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("usePreferredCity must be used within CityProvider");
  }
  return context;
};

interface CityProviderProps {
  children: ReactNode;
  cities: ICity[];
}

export const CityProvider = ({ children, cities }: CityProviderProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const options = useMemo<CityOption[]>(
    () => [ALL_CITIES_OPTION, ...cities.map((c) => ({ value: c.id, label: c.name }))],
    [cities]
  );

  const [cityId, setCityIdState] = useState<number | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage + URL params after mount (avoids SSR mismatch)
  useEffect(() => {
    let resolved: number | null = null;

    // URL param takes priority on screening pages
    if (pathname === "/" || pathname === "/seanse") {
      const params = new URLSearchParams(window.location.search);
      const urlCity = params.get("city");
      if (urlCity) {
        const parsed = Number(urlCity);
        if (cities.some((c) => c.id === parsed)) {
          resolved = parsed;
        }
      }
    }

    // Fall back to localStorage
    if (resolved === null) {
      const stored = localStorage.getItem(PREFERRED_CITY_KEY);
      if (stored) {
        const parsed = Number(stored);
        if (cities.some((c) => c.id === parsed)) {
          resolved = parsed;
        }
      }
    }

    setCityIdState(resolved);
    setIsHydrated(true);

    // Sync to storage if resolved from URL
    if (resolved !== null) {
      localStorage.setItem(PREFERRED_CITY_KEY, String(resolved));
      setPreferredCityCookie(resolved);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const cityName = useMemo(
    () => (cityId ? cities.find((c) => c.id === cityId)?.name ?? "Wszystkie miasta" : "Wszystkie miasta"),
    [cityId, cities]
  );

  const setCityId = useCallback(
    (newCityId: number | null) => {
      setCityIdState(newCityId);
      localStorage.setItem(PREFERRED_CITY_KEY, newCityId !== null ? String(newCityId) : "");
      setPreferredCityCookie(newCityId);

      if (pathname === "/" || pathname === "/seanse") {
        const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
        if (newCityId !== null) {
          params.set("city", String(newCityId));
        } else {
          params.delete("city");
        }
        const queryString = params.toString();
        const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
        router.replace(newUrl, { scroll: false });
      }

      router.refresh();
    },
    [pathname, router]
  );

  const value = useMemo(
    () => ({
      cityId,
      cityName,
      isHydrated,
      setCityId,
      options,
    }),
    [cityId, cityName, isHydrated, setCityId, options]
  );

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};
