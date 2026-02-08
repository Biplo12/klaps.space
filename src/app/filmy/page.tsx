import { Metadata } from "next";
import { getMovies } from "@/lib/movies";
import SectionHeader from "@/components/common/section-header";
import MoviesList from "./_components/movies-list";
import MoviesPagination from "./_components/movies-pagination";

export const dynamic = "force-dynamic";

type MoviesPageProps = {
  searchParams: Promise<{ page?: string }>;
};

const MoviesPage = async ({ searchParams }: MoviesPageProps) => {
  const params = await searchParams;
  const currentPage = Math.max(1, Number(params.page) || 1);
  const { data: movies, meta } = await getMovies({
    page: currentPage,
    limit: 24,
  });

  return (
    <main className="bg-black min-h-screen px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <SectionHeader
          prefix="Katalog"
          title="Filmy"
          description="Klasyka, retrospektywy i seanse specjalne w kinach studyjnych w całej Polsce."
        />
        <MoviesList movies={movies} />
        {meta.totalPages > 1 && (
          <MoviesPagination
            currentPage={meta.page}
            totalPages={meta.totalPages}
          />
        )}
      </div>
    </main>
  );
};

export const metadata: Metadata = {
  title: "Filmy - Klatka",
  description:
    "Katalog filmów dostępnych w serwisie Klatka. Klasyka, retrospektywy i seanse specjalne w kinach studyjnych.",
};

export default MoviesPage;
