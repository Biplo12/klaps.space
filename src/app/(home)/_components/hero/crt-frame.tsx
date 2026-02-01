"use client";

import React from "react";
import { cn } from "@/lib/utils";

type CRTFrameProps = {
  children: React.ReactNode;
  className?: string;
};

const CRTFrame: React.FC<CRTFrameProps> = ({ children, className = "" }) => {
  return <div className={cn(className)}>{children}</div>;
};

export default CRTFrame;
