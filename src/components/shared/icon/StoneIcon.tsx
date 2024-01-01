import config from "@/config";
import classNames from "classnames";
import Image from "next/image";

const StoneIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      className={classNames(className, "h-8 w-auto")}
      src={config.stoneIcon}
      alt="stone icon"
      width={1000}
      height={1000}
    />
  );
};

export default StoneIcon;
