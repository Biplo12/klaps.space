import { Metadata } from "next";
import { getMovieById } from "@/lib/movies";
import { getMovieScreenings } from "@/lib/screenings";
import { getPreferredCityId } from "@/lib/get-preferred-city";
import SectionDivider from "@/components/ui/section-divider";
import MovieHero from "./_components/movie-hero";
import MovieDetailsSections from "./_components/movie-details-sections";
import MovieScreenings from "./_components/movie-screenings";
import MovieTrailer from "./_components/movie-trailer";

export const dynamic = "force-dynamic";

type MoviePageProps = {
  params: Promise<{ id: string }>;
};

const MoviePage = async ({ params }: MoviePageProps) => {
  const { id } = await params;
  const cityId = await getPreferredCityId();

  const [movie, screenings] = await Promise.all([
    getMovieById(Number(id)),
    getMovieScreenings({ movieId: id, cityId, limit: 1000 }),
  ]);

  return (
    <main className="bg-black min-h-screen px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <MovieHero movie={movie} />

        <SectionDivider />
        <MovieDetailsSections movie={movie} />

        {movie.videoUrl && (
          <>
            <SectionDivider />
            <MovieTrailer videoUrl={movie.videoUrl} />
          </>
        )}

        <SectionDivider />
        <MovieScreenings screenings={screenings} />
      </div>
    </main>
  );
};

export const generateMetadata = async ({
  params,
}: MoviePageProps): Promise<Metadata> => {
  const { id } = await params;
  const movie = await getMovieById(Number(id));

  const description = movie.description
    ? movie.description.slice(0, 160)
    : `${movie.title} (${movie.productionYear}) - szczegóły filmu w serwisie Klatka.`;

  return {
    title: `${movie.title} - Klatka`,
    description,
  };
};

export default MoviePage;
