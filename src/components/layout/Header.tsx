"use client";

import { useReducer } from "react";
import MobileHeader from "./MobileHeader";
import Menu from "./Menu";
import Dimmed from "./Dimmed";

const Header = () => {
  const [isOpen, toggleMenu] = useReducer((state) => !state, false);

  return (
    <div className="mx-auto max-w-md">
      <MobileHeader toggleMenu={toggleMenu} />
      <Dimmed isVisible={isOpen} close={toggleMenu} />
      <Menu isOpen={isOpen} />
    </div>
  );
};

export default Header;
