"use client";

import { useCallback, useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const DATE_FROM_PARAM_KEY = "dateFrom";
const DATE_TO_PARAM_KEY = "dateTo";

interface UseDateParamReturn {
  dateFrom: string;
  dateTo: string;
  handleDateChange: (value: string | null) => void;
}

export const useDateParam = (defaultDate?: string): UseDateParamReturn => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const initialDateFrom =
    searchParams.get(DATE_FROM_PARAM_KEY) ?? defaultDate ?? "";
  const initialDateTo =
    searchParams.get(DATE_TO_PARAM_KEY) ?? defaultDate ?? "";

  const [dateFrom, setDateFrom] = useState(initialDateFrom);
  const [dateTo, setDateTo] = useState(initialDateTo);

  useEffect(() => {
    const urlDateFrom = searchParams.get(DATE_FROM_PARAM_KEY);
    const urlDateTo = searchParams.get(DATE_TO_PARAM_KEY);

    if (urlDateFrom && urlDateTo) {
      setDateFrom(urlDateFrom);
      setDateTo(urlDateTo);
    } else if (defaultDate) {
      setDateFrom(defaultDate);
      setDateTo(defaultDate);

      const params = new URLSearchParams(searchParams.toString());
      params.set(DATE_FROM_PARAM_KEY, defaultDate);
      params.set(DATE_TO_PARAM_KEY, defaultDate);
      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
      window.history.replaceState(null, "", newUrl);
    }
  }, [searchParams, defaultDate, pathname]);

  const handleDateChange = useCallback(
    (value: string | null) => {
      setDateFrom(value ?? "");
      setDateTo(value ?? "");

      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete(DATE_FROM_PARAM_KEY);
        params.delete(DATE_TO_PARAM_KEY);
      } else {
        params.set(DATE_FROM_PARAM_KEY, value);
        params.set(DATE_TO_PARAM_KEY, value);
      }

      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

      router.replace(newUrl);
    },
    [searchParams, pathname, router]
  );

  return {
    dateFrom,
    dateTo,
    handleDateChange,
  };
};
