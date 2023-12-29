import config from "@/config";
import { PATH } from "@/constants";
import Image from "next/image";
import Link from "next/link";

interface MobileHeaderProps {
  toggleMenu: () => void;
}

const MobileHeader = ({ toggleMenu }: MobileHeaderProps) => {
  return (
    <header className="fixed left-0 right-0 top-0 z-header mx-auto flex h-32 max-w-md items-center justify-center">
      <div className="relative flex w-full items-center justify-center">
        <button
          className="absolute -left-4 rotate-90 rounded-t-xl border-2 border-b-0 border-black bg-white p-3"
          onClick={toggleMenu}
        >
          MENU
        </button>
        <Link href={PATH.MAIN}>
          <div className="mx-auto h-24">
            <Image
              className="h-full w-full object-contain"
              src={config.logo}
              alt="logo"
              width={1000}
              height={1000}
            />
          </div>
        </Link>
      </div>
    </header>
  );
};
export default MobileHeader;
