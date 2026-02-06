import React from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  message?: string;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message = "Brak danych do wyświetlenia.",
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-center py-12", className)}>
      <p className="text-[#B3B3B3] italic text-center">{message}</p>
    </div>
  );
};

export default EmptyState;
