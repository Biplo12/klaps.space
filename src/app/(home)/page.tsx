import Hero from "./_components/hero";
import ScreeningsSection from "./_components/screenings-section";

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

  return (
    <>
      <Hero />
      <ScreeningsSection searchParams={params} />
    </>
  );
}
