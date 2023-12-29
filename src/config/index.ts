interface Config {
  logo: string;
  stone: string;
  wallpaper: string;
  allIcon: string;
  outerIcon: string;
  pantsIcon: string;
  skirtIcon: string;
  accIcon: string;
}

const createConfig: () => Config = () => {
  return {
    logo: "/assets/images/logo.png",
    stone: "/assets/images/menu/all.png",
    wallpaper: "/assets/images/wallpaper.png",
    allIcon: "/assets/images/menu/all.png",
    outerIcon: "/assets/images/menu/outer.png",
    pantsIcon: "/assets/images/menu/pants.png",
    skirtIcon: "/assets/images/menu/skirt.png",
    accIcon: "/assets/images/menu/acc.png",
  };
};

export default createConfig();
