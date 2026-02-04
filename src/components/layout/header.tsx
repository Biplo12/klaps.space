import React from "react";
import Logo from "../common/logo";
import Link from "next/link";

const header: React.FC = () => {
  const navItems = [
    {
      label: "Filmy",
      href: "/movies",
    },
    {
      label: "Kina",
      href: "/cinemas",
    },
  ];

  return (
    <header className="flex items-center justify-between px-8 w-full z-50 py-4 bg-transparent fixed top-0 left-0 right-0">
      <Logo />
    </header>
  );
};

export default header;
