import Link from "next/link";
import React from "react";

const logo: React.FC = () => {
  return (
    <Link href="/" className="text-4xl font-monoton uppercase text-blood-red">
      Klatka
    </Link>
  );
};

export default logo;
