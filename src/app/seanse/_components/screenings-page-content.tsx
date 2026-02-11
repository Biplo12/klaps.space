import { getPaginatedScreenings } from "@/lib/screenings";
import { getCities } from "@/lib/cities";
import { getGenres } from "@/lib/genres";
import ScreeningsPageInner from "./screenings-page-inner";

interface ScreeningsPageContentProps {
  searchParams: {
    city?: string;
    genre?: string;
    dateFrom?: string;
    dateTo?: string;
    page?: string;
  };
}

const ScreeningsPageContent = async ({
  searchParams,
}: ScreeningsPageContentProps) => {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;

  const [screeningsResponse, cities, genres] = await Promise.all([
    getPaginatedScreenings({
      cityId: searchParams.city,
      genreId: searchParams.genre,
      dateFrom: searchParams.dateFrom,
      dateTo: searchParams.dateTo,
      page: currentPage,
      limit: 24,
    }),
    getCities(),
    getGenres(),
  ]);

  return (
    <ScreeningsPageInner
      screenings={screeningsResponse?.data || []}
      cities={cities}
      genres={genres}
      currentPage={screeningsResponse?.meta?.page || 1}
      totalPages={screeningsResponse?.meta?.totalPages || 1}
    />
  );
};

export default ScreeningsPageContent;
