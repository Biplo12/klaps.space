import { Metadata } from "next";
import { getCinemas } from "@/lib/cinemas";
import { getMovies } from "@/lib/movies";
import SectionHeader from "@/components/common/section-header";
import SitemapContent from "./_components/sitemap-content";

export const dynamic = "force-dynamic";

const SitemapPage = async () => {
  const [{ data: cinemaGroups }, { data: movies }] = await Promise.all([
    getCinemas({ limit: 200 }),
    getMovies({ limit: 1000 }),
  ]);

  return (
    <main className="bg-black min-h-screen px-8 md:px-16 pt-28 pb-32 md:pb-40">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-16">
        <SectionHeader
          prefix="Mapa witryny"
          title="Wszystkie podstrony"
          description="Przeglądaj wszystkie dostępne strony serwisu Klatka w jednym miejscu."
        />

        <SitemapContent cinemaGroups={cinemaGroups} movies={movies} />
      </div>
    </main>
  );
};

export const metadata: Metadata = {
  title: "Mapa witryny - Klatka",
  description:
    "Mapa witryny serwisu Klatka. Przeglądaj wszystkie dostępne strony i podstrony w jednym miejscu.",
};

export default SitemapPage;
