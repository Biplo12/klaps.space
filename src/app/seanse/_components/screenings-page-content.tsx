import { getPaginatedScreenings } from "@/lib/screenings";
import { getGenres } from "@/lib/genres";
import { getPreferredCityId } from "@/lib/get-preferred-city";
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
  const cityId = await getPreferredCityId(searchParams);

  const [screeningsResponse, genres] = await Promise.all([
    getPaginatedScreenings({
      cityId,
      genreId: searchParams.genre,
      dateFrom: searchParams.dateFrom,
      dateTo: searchParams.dateTo,
      page: currentPage,
      limit: 24,
    }),
    getGenres(),
  ]);

  return (
    <ScreeningsPageInner
      screenings={screeningsResponse?.data || []}
      genres={genres}
      currentPage={screeningsResponse?.meta?.page || 1}
      totalPages={screeningsResponse?.meta?.totalPages || 1}
    />
  );
};

export default ScreeningsPageContent;
