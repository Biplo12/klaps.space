import React from "react";
import { Separator } from "@/components/ui/separator";
import ContactSidebarItem from "./contact-sidebar-item";
import ContactSidebarNote from "./contact-sidebar-note";

const ContactSidebar: React.FC = () => {
  return (
    <aside className="hidden md:block w-80 shrink-0">
      <div className="sticky top-28 flex flex-col gap-10">
        <ContactSidebarItem label="E-mail">
          <a
            href="mailto:kontakt@klatka.pl"
            className="text-2xl text-white font-bold uppercase tracking-[0.04em] hover:text-blood-red transition-colors duration-300 leading-tight"
          >
            kontakt@klatka.pl
          </a>
        </ContactSidebarItem>

        <Separator className="bg-neutral-800" />

        <ContactSidebarItem label="Czas odpowiedzi">
          <span className="text-base text-white/60 leading-relaxed">
            Odpowiadamy na wiadomości w&nbsp;ciągu kilku dni roboczych.
          </span>
        </ContactSidebarItem>

        <Separator className="bg-neutral-800" />

        <ContactSidebarNote text="Prosimy o zwięzły opis sprawy w temacie wiadomości — ułatwi nam to szybszą odpowiedź." />
      </div>
    </aside>
  );
};

export default ContactSidebar;
