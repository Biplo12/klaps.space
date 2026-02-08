import { Metadata } from "next";
import ContactPageContent from "./_components/contact-page-content";
import SectionHeader from "@/components/common/section-header";

export const metadata: Metadata = {
  title: "Kontakt — Klatka",
  description:
    "Skontaktuj się z zespołem Klatki. Napisz w sprawie współpracy, zgłoś błąd lub podziel się opinią.",
};

const ContactPage = () => {
  return (
    <main className="bg-black min-h-screen px-8 md:px-16 pt-28 pb-32 md:pb-40">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-16">
        <SectionHeader prefix="Kontakt" title="Napisz do nas" />
        <ContactPageContent />
      </div>
    </main>
  );
};

export default ContactPage;
