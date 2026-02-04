import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground() {
  return (
    <div
      className={cn(
        "absolute inset-0 opacity-10",
        "bg-size-[40px_40px]",
        "bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]"
      )}
      aria-hidden
    />
  );
}
