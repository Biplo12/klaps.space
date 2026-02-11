"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useHeaderScroll } from "@/hooks/use-header-scroll";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import Logo from "@/components/common/logo";
import DesktopNav from "./desktop-nav";
import MobileMenuButton from "./mobile-menu-button";
import MobileNav from "./mobile-nav";

const NAV_LINKS = [
  { href: "/", label: "Strona główna" },
  { href: "/screenings", label: "Seanse" },
  { href: "/filmy", label: "Filmy" },
  { href: "/kina", label: "Kina" },
  { href: "/miasta", label: "Miasta" },
  { href: "/o-projekcie", label: "O projekcie" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

const Header: React.FC = () => {
  const hasScrolled = useHeaderScroll({ threshold: 50 });
  const {
    isOpen: isMenuOpen,
    handleToggle,
    handleClose,
    handleKeyDown,
  } = useMobileMenu();

  return (
    <>
      <header
        className={cn(
          "flex items-center justify-between px-4 md:px-8 w-full z-50 py-4 fixed top-0 left-0 right-0 transition-all duration-300",
          hasScrolled || isMenuOpen
            ? "bg-black/95 backdrop-blur-sm"
            : "bg-gradient-to-b from-black via-black/60 to-transparent"
        )}
      >
        <Logo />
        <DesktopNav links={NAV_LINKS} />
        <MobileMenuButton
          isOpen={isMenuOpen}
          onToggle={handleToggle}
          onKeyDown={handleKeyDown}
        />
      </header>
      <MobileNav links={NAV_LINKS} isOpen={isMenuOpen} onClose={handleClose} />
    </>
  );
};

export default Header;
