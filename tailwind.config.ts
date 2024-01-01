import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        dashboard: "url('/assets/images/homeBottomWallpaper.png')",
      },
      colors: {
        background: "#00000",
        main: "#DB281B",
        orange: "#EC9932",
        mint: "#52E4B1",
        lightMint: "#9CE9C4",
        pink: "#FD8684",
        skyBlue: "#89E6FD",
        yellow: "#E9E462",
        purple: "#DBC5FC",
        red: "#C6403E",
        naver: "#13C949",
        kakaoYellow: "#FFEB3B",
        kakaoBrown: "#55413D",
        point: "#89FF60",
      },
      zIndex: {
        header: "100",
        eventBanner: "100",
        dimmed: "1000",
        modal: "1001",
      },
    },
  },
  plugins: [],
};
export default config;
