interface Config {
  logo: string;
  stoneIcon: string;
  wallpaper: string;
  moreIcon: string;
  decorationBand: string;
  coupon: string;
  stoneInfo: string;

  allIcon: string;
  topIcon: string;
  pantsIcon: string;
  skirtIcon: string;
  accIcon: string;
}

const createConfig: () => Config = () => {
  return {
    logo: "/assets/images/logo.png",
    stoneIcon: "/assets/images/menu/all.png",
    wallpaper: "/assets/images/wallpaper.png",
    moreIcon: "/assets/images/moreIcon.png",
    decorationBand: "/assets/images/decorationBand.png",
    coupon: "/assets/images/coupon.png",
    stoneInfo: "/assets/images/stoneInfo.png",

    allIcon: "/assets/images/menu/all.png",
    topIcon: "/assets/images/menu/top.png",
    pantsIcon: "/assets/images/menu/pants.png",
    skirtIcon: "/assets/images/menu/skirt.png",
    accIcon: "/assets/images/menu/acc.png",
  };
};

export default createConfig();
