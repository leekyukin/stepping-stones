"use client";

import config from "@/config";
import { MENU_ARR, MenuType } from "@/constants";
import classNames from "classnames";
import Image from "next/image";

interface FilterProps {
  menu: MenuType;
  setMenu: (menu: MenuType) => void;
}

const Filter = ({ menu, setMenu }: FilterProps) => {
  return (
    <div className="z-10 -mt-16 grid w-full grid-cols-5 items-end justify-center">
      {MENU_ARR.map((_menu) => (
        <div key={_menu.name}>
          <div className="shadow-2xl shadow-white">
            <Image
              className={classNames(
                "mx-auto mb-5 h-8 w-auto animate-spin shadow-white drop-shadow-2xl",
                menu === _menu.name ? "block" : "hidden",
              )}
              src={config.stone}
              alt="stone"
              width={1000}
              height={1000}
            />
          </div>
          <div
            className="cursor-pointer rounded-t-xl py-3 text-center text-sm font-bold"
            style={{ backgroundColor: _menu.color }}
            onClick={() => setMenu(_menu.name as MenuType)}
          >
            {_menu.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
