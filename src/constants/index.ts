import config from "@/config";

const PATH = {
  MAIN: "/",
  LOGIN: "/login",
  SHOP: "/shop",
  ITEM_DETAIL: "/shop/detail/",
  MY_PAGE: "/my-page",
  CART: "/cart",
  ORDER: "/order",
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
  { image: config.allIcon, name: "All", color: "#FFED92" },
  { image: config.topIcon, name: "Top", color: "#B1E2EF" },
  { image: config.pantsIcon, name: "Pants", color: "#FFB4A3" },
  { image: config.skirtIcon, name: "Skirt", color: "#DBC5FC" },
  { image: config.accIcon, name: "Acc", color: "#89DDAF" },
];

const MENU = {
  All: { image: config.allIcon, color: "#FFED92" },
  Top: { image: config.topIcon, color: "#B1E2EF" },
  Pants: { image: config.pantsIcon, color: "#FFB4A3" },
  Skirt: { image: config.skirtIcon, color: "#DBC5FC" },
  Acc: { image: config.accIcon, color: "#89DDAF" },
};

const BANK = [
  "케이뱅크",
  "기업은행",
  "신한은행",
  "KB국민은행",
  "하나은행",
  "NH농협은행",
  "우리은행",
  "대구은행",
  "부산은행",
  "광주은행",
  "SC은행",
  "경남은행",
  "전북은행",
  "수협은행",
];

export { COLOR, COLOR_ARR, MENU, MENU_ARR, PATH, BANK };
