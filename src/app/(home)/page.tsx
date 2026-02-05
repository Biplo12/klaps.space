import { getScreenings } from "@/lib/screenings";
import { getCities } from "@/lib/cities";
import Hero from "./_components/hero";
import ScreeningsSection from "./_components/screenings-section";

export default async function Home() {
  const [screenings, cities] = await Promise.all([
    getScreenings(),
    getCities(),
  ]);

  return (
    <>
      <Hero screenings={screenings} />
      <ScreeningsSection screenings={screenings} cities={cities} />
    </>
  );
}
