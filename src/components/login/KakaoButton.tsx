"use client";

import { PATH } from "@/constants";
import { signIn } from "next-auth/react";
import { RiKakaoTalkFill } from "react-icons/ri";

const KakaoButton = () => {
  return (
    <button
      className="bg-kakaoYellow text-kakaoBrown flex h-14 w-full items-center justify-center gap-5 rounded-2xl"
      onClick={() =>
        signIn("kakao", { callbackUrl: PATH.SIGN_UP.REDIRECT_URL.KAKAO })
      }
    >
      <RiKakaoTalkFill className="fill-kakaoBrown text-3xl" />
      Kakao
    </button>
  );
};

export default KakaoButton;
