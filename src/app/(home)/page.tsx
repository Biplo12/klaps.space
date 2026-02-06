import Hero from "./_components/hero";
import ScreeningsSection from "./_components/screenings-section";

interface HomeProps {
  searchParams: Promise<{ city?: string; genre?: string; date?: string }>;
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
