import React from "react";
import { ICinemaGroup } from "@/interfaces/ICinema";
import { IMovieSummary } from "@/interfaces/IMovies";
import SitemapLinkGroup from "./sitemap-link-group";

type SitemapLink = {
  href: string;
  label: string;
};

type SitemapGroup = {
  heading: string;
  links: SitemapLink[];
};

const STATIC_GROUPS: SitemapGroup[] = [
  {
    heading: "Nawigacja",
    links: [
      { href: "/", label: "Strona główna" },
      { href: "/screenings", label: "Seanse" },
      { href: "/filmy", label: "Filmy" },
      { href: "/kina", label: "Kina" },
      { href: "/cities", label: "Miasta" },
    ],
  },
  {
    heading: "Informacje",
    links: [
      { href: "/o-projekcie", label: "O projekcie" },
      { href: "/jak-to-dziala", label: "Jak to działa" },
      { href: "/kontakt", label: "Kontakt" },
      { href: "/regulamin", label: "Regulamin" },
      { href: "/sitemap", label: "Mapa witryny" },
      { href: "/accessibility", label: "Dostępność" },
    ],
  },
];

interface SitemapContentProps {
  cinemaGroups: ICinemaGroup[];
  movies: readonly IMovieSummary[];
}

const SitemapContent: React.FC<SitemapContentProps> = ({
  cinemaGroups,
  movies,
}) => {
  const sortedGroups = [...cinemaGroups].sort((a, b) =>
    a.city.name.localeCompare(b.city.name, "pl"),
  );

  const citiesGroup: SitemapGroup = {
    heading: "Miasta",
    links: sortedGroups.map((group) => ({
      href: `/cities/${group.city.id}`,
      label: group.city.name,
    })),
  };

  const cinemasGroup: SitemapGroup = {
    heading: "Kina",
    links: sortedGroups.flatMap((group) =>
      group.cinemas.map((cinema) => ({
        href: `/kina/${cinema.id}`,
        label: cinema.name,
      })),
    ),
  };

  const moviesGroup: SitemapGroup = {
    heading: "Filmy",
    links: [...movies].map((movie) => ({
      href: `/filmy/${movie.id}`,
      label: movie.title,
    })),
  };

  const allGroups = [...STATIC_GROUPS, citiesGroup, cinemasGroup, moviesGroup];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-x-20">
      {allGroups.map((group) => (
        <SitemapLinkGroup
          key={group.heading}
          heading={group.heading}
          links={group.links}
        />
      ))}
    </div>
  );
};

export default SitemapContent;
