"use client";

import config from "@/config";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const DecorationBandMarquee = () => {
  return (
    <Marquee>
      <Image
        src={config.decorationBand}
        className="h-10 w-auto"
        alt="decoration band marquee"
        width={1000}
        height={1000}
      />
    </Marquee>
  );
};

export default DecorationBandMarquee;
