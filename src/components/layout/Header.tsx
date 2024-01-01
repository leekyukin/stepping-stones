"use client";

import { useReducer } from "react";
import Menu from "./Menu";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [isOpen, toggleMenu] = useReducer((state) => !state, false);

  return (
    <>
      <MobileHeader toggleMenu={toggleMenu} />
      <Menu isOpen={isOpen} close={toggleMenu} />
    </>
  );
};

export default Header;
