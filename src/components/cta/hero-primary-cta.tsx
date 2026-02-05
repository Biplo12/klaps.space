import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface HeroPrimaryCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

const BASE_STYLES =
  "inline-flex items-center justify-center px-8 py-4 text-lg font-semibold uppercase tracking-[0.2em] text-white bg-blood-red transition-all duration-200 hover:bg-blood-red/90 hover:scale-[1.02] focus-visible:outline focus-visible:ring-2 focus-visible:ring-blood-red focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const HeroPrimaryCTA: React.FC<HeroPrimaryCTAProps> = ({
  href,
  children,
  className,
  "aria-label": ariaLabel,
}) => {
  const label =
    ariaLabel ?? (typeof children === "string" ? children : undefined);

  return (
    <Link href={href} className={cn(BASE_STYLES, className)} aria-label={label}>
      {children}
    </Link>
  );
};

export default HeroPrimaryCTA;
