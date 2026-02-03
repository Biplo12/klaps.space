import React from "react";
import Logo from "../logo";
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
    <header className="flex items-center justify-between px-8 w-full z-50 py-4">
      <Logo />
      <nav className="flex items-center gap-4 font-oswald text-xl">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="text-banana-yellow hover:text-golden-yellow uppercase"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default header;
