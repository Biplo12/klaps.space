import React from "react";
import NavLink from "./nav-link";

interface NavLinkItem {
  href: string;
  label: string;
}

interface DesktopNavProps {
  links: readonly NavLinkItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => {
  return (
    <nav className="hidden lg:flex bg-black px-8 py-3 items-center gap-8">
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          className="text-sm"
        />
      ))}
    </nav>
  );
};

export default DesktopNav;
