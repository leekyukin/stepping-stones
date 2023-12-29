import { MENU_ARR } from "@/constants";
import classNames from "classnames";
import Image from "next/image";

interface MenuProps {
  isOpen: boolean;
}

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <div
      className={classNames(
        "fixed z-modal grid h-2/5 w-full max-w-md grid-cols-1 rounded-t-2xl bg-white duration-700",
        isOpen ? "bottom-0" : "-bottom-2/3",
      )}
    >
      {MENU_ARR.map((menu) => (
        <div
          key={menu.name}
          className={classNames(
            "flex items-center font-bold",
            menu.name === "ACC" ? "border-none" : "border-b-2  border-black",
          )}
        >
          <Image
            src={menu.image}
            alt="menu"
            width={1000}
            height={1000}
            className="h-8 w-16 object-contain"
          />
          <div className="text-xl">{menu.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
