import React from "react";

const StudioCinemasHeader: React.FC = () => {
  return (
    <header className="mb-16 md:mb-20">
      <h2
        id="studio-cinemas-title"
        className="text-white text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-none"
      >
        Kina studyjne w Polsce
      </h2>
      <p className="mt-4 text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed">
        Miejsca, w których kino jest czymś więcej niż rozrywką.
      </p>
    </header>
  );
};

export default StudioCinemasHeader;
