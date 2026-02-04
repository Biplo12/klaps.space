import { getScreenings } from "@/lib/screenings";
import Hero from "./_components/hero";

export default async function Home() {
  const screenings = await getScreenings();

  return (
    <>
      <Hero screenings={screenings} />
    </>
  );
}
