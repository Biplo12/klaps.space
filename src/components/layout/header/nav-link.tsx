import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  tabIndex?: number;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  onClick,
  tabIndex,
  className,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      tabIndex={tabIndex}
      className={cn(
        "font-medium uppercase tracking-[0.2em] text-white/80 hover:text-blood-red transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      )}
    >
      {label}
    </Link>
  );
};

export default NavLink;
