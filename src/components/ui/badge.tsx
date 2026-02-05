import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em]",
  {
    variants: {
      variant: {
        default: "bg-blood-red text-white",
        outline: "border-2 border-blood-red text-blood-red bg-transparent",
        label:
          "border-l-4 border-l-white/80 bg-transparent text-white pl-4 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  children,
  "aria-label": ariaLabel,
  ...props
}) => {
  const resolvedAriaLabel =
    ariaLabel ?? (typeof children === "string" ? children : undefined);

  return (
    <span
      className={cn(badgeVariants({ variant, className }))}
      aria-label={resolvedAriaLabel}
      {...props}
    >
      {children}
    </span>
  );
};

export { Badge, badgeVariants };
