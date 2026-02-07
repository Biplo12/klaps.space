"use client";

import { useCallback, useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const DATE_PARAM_KEY = "date";

interface UseDateParamReturn {
  selectedDate: string;
  handleDateChange: (value: string | null) => void;
}

export const useDateParam = (defaultDate?: string): UseDateParamReturn => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const initialDate = searchParams.get(DATE_PARAM_KEY) ?? defaultDate ?? "";
  const [selectedDate, setSelectedDate] = useState(initialDate);

  // Sync state when searchParams change (e.g. after router.replace navigation)
  useEffect(() => {
    const urlDate = searchParams.get(DATE_PARAM_KEY);

    if (urlDate) {
      setSelectedDate(urlDate);
    } else if (defaultDate) {
      setSelectedDate(defaultDate);

      // Set default date in URL silently (no server re-render needed)
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

      // Trigger Next.js navigation so the server component re-fetches with new date
      router.replace(newUrl);
    },
    [searchParams, pathname, router]
  );

  return {
    selectedDate,
    handleDateChange,
  };
};
