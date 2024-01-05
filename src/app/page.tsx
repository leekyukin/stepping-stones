"use client";

import DecorationBandMarquee from "@/components/shared/DecorationBand";
import config from "@/config";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image src={config.home} alt="home" width={1000} height={1000} />
        <div className="absolute bottom-16 h-72 animate-bounce">
          <Image
            className="h-full w-full object-contain"
            src={config.jumpMan}
            alt="jump man"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <DecorationBandMarquee />
    </div>
  );
}
