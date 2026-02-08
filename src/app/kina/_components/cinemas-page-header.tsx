import React from "react";

const CinemasPageHeader: React.FC = () => {
  return (
    <header className="mb-16 md:mb-24">
      <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none">
        Kina studyjne
      </h1>
      <p className="mt-4 text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed">
        Pełna lista kin studyjnych w Polsce. Miejsca, które traktują kino jako
        sztukę — nie tylko rozrywkę.
      </p>
    </header>
  );
};

export default CinemasPageHeader;
