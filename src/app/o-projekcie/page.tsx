import { Metadata } from "next";
import AboutPageContent from "./_components/about-page-content";
import SectionHeader from "@/components/common/section-header";

export const metadata: Metadata = {
  title: "O projekcie — Klatka",
  description:
    "Czym jest Klatka, jaki problem rozwiązuje i dlaczego kino klasyczne zasługuje na jedno, czytelne miejsce w sieci.",
};

export default function OProjekciePage() {
  return (
    <main className="bg-black min-h-screen px-8 md:px-16 lg:px-24 pt-28 pb-32 md:pb-40">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-16">
        <SectionHeader prefix="O projekcie" title="Klatka" />
        <AboutPageContent />
      </div>
    </main>
  );
}
