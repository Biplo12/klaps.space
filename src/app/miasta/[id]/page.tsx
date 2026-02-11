import { Metadata } from "next";
import { getCityById } from "@/lib/cities";
import { getCinemas } from "@/lib/cinemas";
import SectionDivider from "@/components/ui/section-divider";
import CityStats from "./_components/city-stats";
import CityCinemas from "./_components/city-cinemas";
import CityScreenings from "./_components/city-screenings";
import SectionHeader from "@/components/common/section-header";

export const dynamic = "force-dynamic";

type CityPageProps = {
  params: Promise<{ id: string }>;
};

const CityPage = async ({ params }: CityPageProps) => {
  const { id } = await params;

  const [city, cinemasResponse] = await Promise.all([
    getCityById(Number(id)),
    getCinemas({ cityId: id, limit: 100 }),
  ]);

  const { screenings } = city;

  const cinemasCount = cinemasResponse.data.flatMap((g) => g.cinemas).length;
  const moviesCount = screenings?.length ?? 0;
  const screeningsCount =
    screenings?.reduce((sum, group) => sum + group.screenings.length, 0) ?? 0;

  return (
    <main className="bg-black min-h-screen px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <SectionHeader
          prefix="Miasto"
          title={city.name}
          description={`Kina studyjne i aktualne seanse w ${city.nameDeclinated}.`}
        />

        <CityStats
          cinemasCount={cinemasCount}
          moviesCount={moviesCount}
          screeningsCount={screeningsCount}
        />

        <SectionDivider />
        <CityCinemas cinemaGroups={cinemasResponse.data} />
        <SectionDivider />
        <CityScreenings screenings={screenings} />
      </div>
    </main>
  );
};

export const generateMetadata = async ({
  params,
}: CityPageProps): Promise<Metadata> => {
  const { id } = await params;
  const city = await getCityById(Number(id));

  return {
    title: `Kina studyjne w ${city.nameDeclinated} - Klatka`,
    description: `Kina studyjne i aktualne seanse w ${city.nameDeclinated}. Sprawdź repertuar kin niezależnych.`,
  };
};

export default CityPage;
