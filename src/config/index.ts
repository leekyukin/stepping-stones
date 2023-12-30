interface Config {
  logo: string;
  stone: string;
  wallpaper: string;
  decorationBand: string;
  allIcon: string;
  topIcon: string;
  pantsIcon: string;
  skirtIcon: string;
  accIcon: string;
}

const createConfig: () => Config = () => {
  return {
    logo: "/assets/images/logo.png",
    stone: "/assets/images/menu/all.png",
    wallpaper: "/assets/images/wallpaper.png",
    decorationBand: "/assets/images/decorationBand.png",
    allIcon: "/assets/images/menu/all.png",
    topIcon: "/assets/images/menu/outer.png",
    pantsIcon: "/assets/images/menu/pants.png",
    skirtIcon: "/assets/images/menu/skirt.png",
    accIcon: "/assets/images/menu/acc.png",
  };
};

export default createConfig();
