import { getScreenings } from "@/lib/screenings";
import Hero from "./_components/hero";

export default async function Home() {
  const screenings = await getScreenings();

  return (
    <>
      <Hero screenings={screenings} />
      <section
        id="seanse"
        className="min-h-screen bg-black"
        aria-label="Seanse"
      />
    </>
  );
}
