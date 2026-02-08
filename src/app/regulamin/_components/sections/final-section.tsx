import React from "react";
import ContentSection from "@/components/common/content-section";
import { CONTACT_EMAIL } from "@/constants";

const FinalSection: React.FC = () => {
  return (
    <ContentSection id="postanowienia-koncowe" title="Postanowienia końcowe">
      <p>
        W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają
        odpowiednie przepisy prawa polskiego.
      </p>

      <p>
        Wszelkie pytania, uwagi oraz zgłoszenia dotyczące regulaminu lub
        działania serwisu prosimy kierować na adres e-mail: {CONTACT_EMAIL}.
      </p>

      <p>Regulamin obowiązuje od dnia jego opublikowania na stronie serwisu.</p>
    </ContentSection>
  );
};

export default FinalSection;
