import Hero from "./_components/hero";
import MissionSection from "./_components/mission-section";
import MultiCitySection from "./_components/multi-city-section";
import StudioCinemasSection from "./_components/studio-cinemas-section";
import SectionDivider from "@/components/ui/section-divider";
import { getCinemas } from "@/lib/cinemas";
import { getMultiCityMovies } from "@/lib/movies";

export const dynamic = "force-dynamic";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cinemas, multiCityMovies] = await Promise.all([
    getCinemas({ limit: 16 }),
    getMultiCityMovies({ limit: 8 }),
  ]);

  return (
    <>
      <Hero />
      {children}
      <SectionDivider />
      <SectionDivider />
      <MissionSection />
      <SectionDivider />
      <StudioCinemasSection cinemas={cinemas} />
      <MultiCitySection movies={multiCityMovies} />
    </>
  );
}
