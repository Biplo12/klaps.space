import React from "react";
import { cn } from "@/lib/utils";
import NavLink from "./nav-link";

interface NavLinkItem {
  href: string;
  label: string;
}

interface MobileNavProps {
  links: readonly NavLinkItem[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ links, isOpen, onClose }) => {
  return (
    <nav
      id="mobile-menu"
      className={cn(
        "lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-black flex flex-col items-center justify-center gap-8 transition-all duration-300",
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      )}
      aria-label="Nawigacja mobilna"
      aria-hidden={!isOpen}
    >
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className="text-xl"
        />
      ))}
    </nav>
  );
};

export default MobileNav;
