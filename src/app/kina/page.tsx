import { Metadata } from "next";
import { getCinemas } from "@/lib/cinemas";
import SectionHeader from "@/components/common/section-header";
import CinemasList from "./_components/cinemas-list";

export const dynamic = "force-dynamic";

const CinemasPage = async () => {
  const cinemas = await getCinemas({ limit: 200 });

  return (
    <main className="bg-black min-h-screen px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <SectionHeader
          prefix="Lista kin"
          title="Kina studyjne w Polsce"
          description="Miejsca, w których kino jest czymś więcej niż rozrywką."
        />
        <CinemasList cinemas={cinemas} />
      </div>
    </main>
  );
};

export const metadata: Metadata = {
  title: "Kina studyjne w Polsce — Klatka",
  description:
    "Pełna lista kin studyjnych w Polsce. Znajdź kino niezależne w swoim mieście.",
};

export default CinemasPage;
