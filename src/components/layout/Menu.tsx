import { MENU_ARR, PATH } from "@/constants";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import Dimmed from "./Dimmed";

interface MenuProps {
  isOpen: boolean;
  close: () => void;
}

const Menu = ({ isOpen, close }: MenuProps) => {
  return (
    <>
      <Dimmed isVisible={isOpen} close={close} />
      <div
        className={classNames(
          "fixed z-modal grid h-2/5 w-full max-w-md grid-cols-1 overflow-hidden rounded-t-2xl bg-white duration-500",
          isOpen ? "bottom-0" : "-bottom-2/3",
        )}
      >
        {MENU_ARR.map((menu) => (
          <Link
            href={{
              pathname: PATH.SHOP,
              query: { category: menu.name },
            }}
            key={menu.name}
            className={classNames(
              "flex items-center font-bold hover:bg-amber-200",
              menu.name === "Acc" ? "border-none" : "border-b-2  border-black",
            )}
            onClick={close}
          >
            <Image
              src={menu.image}
              alt="menu"
              width={1000}
              height={1000}
              className="h-8 w-16 object-contain"
            />
            <div className="text-xl">{menu.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;
