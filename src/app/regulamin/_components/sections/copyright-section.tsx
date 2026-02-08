import React from "react";
import ContentSection from "@/components/common/content-section";

const CopyrightSection: React.FC = () => {
  return (
    <ContentSection id="prawa-autorskie" title="Prawa autorskie">
      <p>
        Układ graficzny serwisu, logo, teksty oraz pozostałe elementy twórcze
        stanowią własność twórców serwisu i&nbsp;podlegają ochronie prawnej.
      </p>

      <p>
        Plakaty filmowe, opisy filmów oraz inne materiały związane
        z&nbsp;produkcjami filmowymi prezentowanymi w&nbsp;serwisie stanowią
        własność ich odpowiednich właścicieli. Serwis wykorzystuje je wyłącznie
        w&nbsp;celach informacyjnych.
      </p>

      <p>
        Kopiowanie, rozpowszechnianie lub wykorzystywanie treści serwisu
        w&nbsp;celach komercyjnych bez zgody twórców jest zabronione.
      </p>
    </ContentSection>
  );
};

export default CopyrightSection;
