import { Metadata } from "next";
import { getCinemas } from "@/lib/cinemas";
import CinemasPageHeader from "./_components/cinemas-page-header";
import CinemasList from "./_components/cinemas-list";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kina studyjne w Polsce — Klatka",
  description:
    "Pełna lista kin studyjnych w Polsce. Znajdź kino niezależne w swoim mieście.",
};

export default async function KinaPage() {
  const cinemas = await getCinemas({ limit: 200 });

  return (
    <main className="bg-black min-h-screen px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <CinemasPageHeader />
        <CinemasList cinemas={cinemas} />
      </div>
    </main>
  );
}
