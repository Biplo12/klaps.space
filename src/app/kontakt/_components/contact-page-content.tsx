import React from "react";
import ContactSection from "./contact-section";
import ContactInfoItem from "./contact-info-item";
import ContactSidebar from "./contact-sidebar";

const ContactPageContent: React.FC = () => {
  return (
    <div className="flex gap-16">
      <div className="flex flex-col gap-20 flex-1 min-w-0">
        <ContactSection id="o-kontakcie" title="Jak się z nami skontaktować?">
          <p>
            Klatka to projekt rozwijany niezależnie, z&nbsp;myślą
            o&nbsp;miłośnikach kina studyjnego i&nbsp;klasyki filmowej. Jeśli
            chcesz się z&nbsp;nami skontaktować — napisz. Odpowiadamy na
            wiadomości w&nbsp;ciągu kilku dni roboczych.
          </p>
        </ContactSection>

        <div className="flex flex-col md:hidden">
          <ContactInfoItem
            label="E-mail"
            value="kontakt@klatka.pl"
            href="mailto:kontakt@klatka.pl"
          />
          <ContactInfoItem
            label="Czas odpowiedzi"
            value="Do kilku dni roboczych"
          />
        </div>

        <ContactSection id="wspolpraca" title="Współpraca">
          <p>
            Jesteś przedstawicielem kina studyjnego i&nbsp;chciałbyś, aby Twoje
            kino pojawiło się w&nbsp;serwisie? Prowadzisz festiwal filmowy lub
            cykl pokazów specjalnych? Napisz do nas — chętnie porozmawiamy
            o&nbsp;możliwościach współpracy.
          </p>

          <p>
            Jeśli zauważyłeś błąd w&nbsp;repertuarze, brakujące kino lub
            nieaktualną informację — również daj nam znać. Każda informacja
            pomaga rozwijać projekt.
          </p>
        </ContactSection>

        <ContactSection id="uwagi" title="Zgłoszenia i uwagi">
          <p>
            Klatka jest projektem w&nbsp;ciągłym rozwoju. Jeśli masz pomysł na
            usprawnienie serwisu, sugestię dotyczącą funkcjonalności lub chcesz
            podzielić się opinią na temat działania strony — Twoja wiadomość
            jest mile widziana.
          </p>

          <p>
            Wszelkie zgłoszenia dotyczące błędów technicznych, problemów
            z&nbsp;wyświetlaniem lub niedziałających elementów prosimy kierować
            bezpośrednio na adres e-mail podany powyżej.
          </p>
        </ContactSection>
      </div>

      <ContactSidebar />
    </div>
  );
};

export default ContactPageContent;
