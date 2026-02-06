"use client";

import { useCallback, useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

const DATE_PARAM_KEY = "date";

interface UseDateParamReturn {
  selectedDate: string;
  handleDateChange: (value: string | null) => void;
}

export const useDateParam = (defaultDate?: string): UseDateParamReturn => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const initialDate = searchParams.get(DATE_PARAM_KEY) ?? defaultDate ?? "";
  const [selectedDate, setSelectedDate] = useState(initialDate);

  // Set default date in URL on load if not present
  useEffect(() => {
    const urlDate = searchParams.get(DATE_PARAM_KEY);

    if (urlDate) {
      setSelectedDate(urlDate);
    } else if (defaultDate) {
      setSelectedDate(defaultDate);

      // Set default date in URL
      const params = new URLSearchParams(searchParams.toString());
      params.set(DATE_PARAM_KEY, defaultDate);
      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
      window.history.replaceState(null, "", newUrl);
    }
  }, [searchParams, defaultDate, pathname]);

  const handleDateChange = useCallback(
    (value: string | null) => {
      setSelectedDate(value ?? "");

      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete(DATE_PARAM_KEY);
      } else {
        params.set(DATE_PARAM_KEY, value);
      }

      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

      // Update URL without triggering navigation/rerender
      window.history.replaceState(null, "", newUrl);
    },
    [searchParams, pathname]
  );

  return {
    selectedDate,
    handleDateChange,
  };
};
