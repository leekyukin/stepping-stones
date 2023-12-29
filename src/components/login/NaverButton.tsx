"use client";

import { PATH } from "@/constants";
import { signIn } from "next-auth/react";
import { SiNaver } from "react-icons/si";

const NaverButton = () => {
  return (
    <button
      className="bg-naver flex h-14 w-full items-center justify-center gap-6 rounded-2xl text-white"
      onClick={() =>
        signIn("naver", { callbackUrl: PATH.SIGN_UP.REDIRECT_URL.NAVER })
      }
    >
      <SiNaver />
      Naver
    </button>
  );
};

export default NaverButton;
