import Link from "next/link";
import React from "react";

const logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="text-3xl font-monoton uppercase text-golden-yellow"
    >
      Klatka
    </Link>
  );
};

export default logo;
