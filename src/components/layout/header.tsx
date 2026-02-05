import React from "react";
import Logo from "../common/logo";

const Header: React.FC = () => {
  return (
    <header
      className="flex items-center justify-between px-8 w-full z-50 py-4 bg-transparent fixed top-0 left-0 right-0"
      role="banner"
    >
      <Logo />
    </header>
  );
};

export default Header;
