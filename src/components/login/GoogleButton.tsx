"use client";

import { PATH } from "@/constants";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <button
      className="flex h-14 w-full items-center justify-center gap-6 rounded-2xl bg-[#292929] text-white"
      onClick={() =>
        signIn("google", { callbackUrl: PATH.SIGN_UP.REDIRECT_URL.GOOGLE })
      }
    >
      <FcGoogle className="text-2xl" />
      Google
    </button>
  );
};

export default GoogleButton;
