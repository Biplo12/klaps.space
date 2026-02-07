import { Suspense } from "react";
import Hero from "./_components/hero";
import ScreeningsSection from "./_components/screenings-section";
import ScreeningsSectionSkeleton from "./_components/screenings-section/skeleton";

type SearchParams = {
  city?: string;
  genre?: string;
  dateFrom?: string;
  dateTo?: string;
};

interface HomeProps {
  searchParams: Promise<SearchParams>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const suspenseKey = JSON.stringify(params);

  return (
    <>
      <Hero />
      <Suspense key={suspenseKey} fallback={<ScreeningsSectionSkeleton />}>
        <ScreeningsSection searchParams={params} />
      </Suspense>
    </>
  );
}
