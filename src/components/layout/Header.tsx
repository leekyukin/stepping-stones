"use client";

import { useReducer } from "react";
import Menu from "./Menu";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [isOpen, toggleMenu] = useReducer((state) => !state, false);

  return (
    <div className="mx-auto max-w-md">
      <MobileHeader toggleMenu={toggleMenu} />
      <Menu isOpen={isOpen} close={toggleMenu} />
    </div>
  );
};

export default Header;
