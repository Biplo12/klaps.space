import { Metadata } from "next";
import { Suspense } from "react";
import ScreeningsSection from "./_components/screenings-section";
import ScreeningsSectionLoader from "./_components/screenings-section/screenings-section-loader";

type SearchParams = {
  city?: string;
  genre?: string;
  dateFrom?: string;
  dateTo?: string;
};

interface HomeProps {
  searchParams: Promise<SearchParams>;
}

const HomePage = async ({ searchParams }: HomeProps) => {
  const params = await searchParams;

  return (
    <Suspense fallback={<ScreeningsSectionLoader />}>
      <ScreeningsSection searchParams={params} />
    </Suspense>
  );
};

export const metadata: Metadata = {
  title: "Klatka - Repertuar seansów specjalnych i klasyki filmowej",
  description:
    "Ogólnopolski przewodnik po seansach specjalnych, klasyce i retrospektywach w kinach studyjnych. Sprawdź co grają.",
};

export default HomePage;
