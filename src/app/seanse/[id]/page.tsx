import { Metadata } from "next";
import { getScreeningById } from "@/lib/screenings";
import SectionDivider from "@/components/ui/section-divider";
import ScreeningHero from "./_components/screening-hero";
import ScreeningInfo from "./_components/screening-info";
import ScreeningCinema from "./_components/screening-cinema";
import ScreeningTicketButton from "./_components/screening-ticket-button";

export const dynamic = "force-dynamic";

type ScreeningPageProps = {
  params: Promise<{ id: string }>;
};

const ScreeningPage = async ({ params }: ScreeningPageProps) => {
  const { id } = await params;
  const { movie, screening } = await getScreeningById(Number(id));

  return (
    <main className="bg-black min-h-screen px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <ScreeningHero movie={movie} />

        <SectionDivider />
        <ScreeningInfo screening={screening} />

        <SectionDivider />
        <ScreeningCinema cinema={screening.cinema} />

        {screening.ticketUrl && (
          <>
            <SectionDivider />
            <ScreeningTicketButton ticketUrl={screening.ticketUrl} />
          </>
        )}
      </div>
    </main>
  );
};

export const generateMetadata = async ({
  params,
}: ScreeningPageProps): Promise<Metadata> => {
  const { id } = await params;
  const { movie, screening } = await getScreeningById(Number(id));

  const description = movie.description
    ? movie.description.slice(0, 160)
    : `${movie.title} (${movie.productionYear}) - seans w ${screening.cinema.name}, ${screening.cinema.city.name}.`;

  return {
    title: `${movie.title} - Seans - Klatka`,
    description,
  };
};

export default ScreeningPage;
