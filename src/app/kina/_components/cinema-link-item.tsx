import React from "react";
import { ICinema } from "@/interfaces/ICinema";

interface CinemaLinkItemProps {
  cinema: ICinema;
}

const CinemaLinkItem: React.FC<CinemaLinkItemProps> = ({ cinema }) => {
  return (
    <li>
      <a
        href={cinema.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${cinema.name}, ${cinema.street}`}
        tabIndex={0}
        className="group flex items-baseline justify-between gap-4 py-3 transition-colors duration-200 hover:text-red-800 focus-visible:text-red-800 focus-visible:outline-none"
      >
        <span className="text-neutral-300 text-base md:text-lg leading-snug group-hover:text-red-800 group-focus-visible:text-red-800 transition-colors duration-200">
          {cinema.name}
        </span>
        <span className="hidden md:block text-neutral-600 text-sm leading-snug shrink-0">
          {cinema.street}
        </span>
      </a>
    </li>
  );
};

export default CinemaLinkItem;
