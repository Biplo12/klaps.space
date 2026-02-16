import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCinemaById } from "@/lib/cinemas";
import { getScreenings } from "@/lib/screenings";
import { ApiNotFoundError } from "@/lib/client";
import SectionDivider from "@/components/ui/section-divider";
import CinemaHeader from "./_components/cinema-header";
import CinemaMapLazy from "./_components/cinema-map-lazy";
import CinemaScreenings from "./_components/cinema-screenings";

export const dynamic = "force-dynamic";

type CinemaPageProps = {
  params: Promise<{ id: string }>;
};

const CinemaPage = async ({ params }: CinemaPageProps) => {
  const { id } = await params;

  let cinema;
  let screenings;

  try {
    [cinema, screenings] = await Promise.all([
      getCinemaById(id),
      getScreenings({ cinemaId: id, limit: 100 }),
    ]);
  } catch (error) {
    if (error instanceof ApiNotFoundError) {
      notFound();
    }
    throw error;
  }

  return (
    <main className="bg-black min-h-screen px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <CinemaHeader cinema={cinema} />
        <SectionDivider />
        <CinemaMapLazy cinema={cinema} />
        <SectionDivider />
        <CinemaScreenings screenings={screenings} />
      </div>
    </main>
  );
};

export const generateMetadata = async ({
  params,
}: CinemaPageProps): Promise<Metadata> => {
  const { id } = await params;
  const cinema = await getCinemaById(id);

  return {
    title: `${cinema.name} — Klatka`,
    description: `Kino studyjne ${cinema.name} w ${cinema.city.name}. Sprawdź aktualne seanse.`,
  };
};

export default CinemaPage;
