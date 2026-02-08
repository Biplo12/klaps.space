import Hero from "./_components/hero";
import MissionSection from "./_components/mission-section";
import StudioCinemasSection from "./_components/studio-cinemas-section";
import SectionDivider from "@/components/ui/section-divider";
import { getCinemas } from "@/lib/cinemas";

export const dynamic = "force-dynamic";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cinemas = await getCinemas({ limit: 16 });
  return (
    <>
      <Hero />
      {children}
      <SectionDivider />
      <MissionSection />
      <SectionDivider />
      <StudioCinemasSection cinemas={cinemas} />
    </>
  );
}
