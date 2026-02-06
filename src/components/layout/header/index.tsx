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
  { href: "#seanse", label: "Seanse" },
  { href: "/filmy", label: "Filmy" },
  { href: "/kina", label: "Kina" },
  { href: "/o-nas", label: "O nas" },
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
    <header
      className={cn(
        "flex items-center justify-between px-4 md:px-8 w-full z-50 py-4 fixed top-0 left-0 right-0 transition-colors duration-300",
        hasScrolled || isMenuOpen ? "bg-black" : "bg-transparent"
      )}
    >
      <Logo />
      <DesktopNav links={NAV_LINKS} />
      <MobileMenuButton
        isOpen={isMenuOpen}
        onToggle={handleToggle}
        onKeyDown={handleKeyDown}
      />
      <MobileNav links={NAV_LINKS} isOpen={isMenuOpen} onClose={handleClose} />
    </header>
  );
};

export default Header;
