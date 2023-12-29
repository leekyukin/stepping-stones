const PATH = {
  MAIN: "/",
  MY_PAGE: "my-page",
  LOGIN: "/login",
  SIGN_UP: {
    REDIRECT_URL: {
      KAKAO: "/shop?provider=kakao",
      NAVER: "/shop?provider=naver",
      GOOGLE: "/shop?provider=google",
      FACEBOOK: "/shop?provider=facebook",
    },
  },
};

const COLOR = {
  orange: "#EC9932",
  mint: "#52E4B1",
  lightMint: "#9CE9C4",
  pink: "#FD8684",
  skyBlue: "#89E6FD",
  yellow: "#E9E462",
  purple: "#DBC5FC",
  red: "#C6403E",
};

const COLOR_ARR = [
  "#EC9932",
  "#52E4B1",
  "#9CE9C4",
  "#FD8684",
  "#89E6FD",
  "#E9E462",
  "#DBC5FC",
  "#C6403E",
];

const MENU_ARR = [
  { image: "/assets/images/menu/all.png", name: "All", color: "#FFED92" },
  { image: "/assets/images/menu/outer.png", name: "Top", color: "#B1E2EF" },
  {
    image: "/assets/images/menu/pants.png",
    name: "Pants",
    color: "#FFB4A3",
  },
  {
    image: "/assets/images/menu/skirt.png",
    name: "Skirt",
    color: "#DBC5FC",
  },
  { image: "/assets/images/menu/acc.png", name: "Acc", color: "#89DDAF" },
];

export type MenuType = "All" | "Top" | "Pants" | "Skirt" | "Acc";

const MENU = {
  All: { image: "/assets/images/menu/all.png", color: "#FFED92" },
  Top: { image: "/assets/images/menu/outer.png", color: "#B1E2EF" },
  Pants: { image: "/assets/images/menu/pants.png", color: "#FFB4A3" },
  Skirt: { image: "/assets/images/menu/skirt.png", color: "#DBC5FC" },
  Acc: { image: "/assets/images/menu/acc.png", color: "#89DDAF" },
};

export { COLOR, COLOR_ARR, MENU, MENU_ARR, PATH };
