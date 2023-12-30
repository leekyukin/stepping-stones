"use client";

import config from "@/config";
import { PATH } from "@/constants";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

interface MobileHeaderProps {
  toggleMenu: () => void;
}

const MobileHeader = ({ toggleMenu }: MobileHeaderProps) => {
  const router = useRouter();
  const { data: session } = useSession();

  const path = session ? PATH.MY_PAGE : PATH.LOGIN;

  return (
    <header className="fixed left-0 right-0 top-0 z-header mx-auto flex h-32 max-w-md items-center justify-center">
      <div className="relative flex w-full items-center justify-center">
        <div className="absolute -left-12 bottom-0 flex rotate-90 justify-start gap-5 border-b-[1.5px] border-b-white">
          <button
            className="rounded-t-xl border-2 border-b-0 border-black bg-white px-5 py-3 font-medium"
            onClick={toggleMenu}
          >
            Shop
          </button>
          <button
            className="rounded-t-xl border-2 border-b-0 border-black bg-white p-3"
            onClick={() => router.push(path)}
          >
            <FaUser />
          </button>
        </div>
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
