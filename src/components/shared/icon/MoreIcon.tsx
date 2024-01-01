import { ItemSearchParamsType } from "@/@types/item";
import config from "@/config";
import { PATH } from "@/constants";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MoreIconProps {
  searchParams: ItemSearchParamsType;
  className?: string;
}

const MoreIcon = ({ searchParams, className }: MoreIconProps) => {
  return (
    <Link
      href={
        PATH.SHOP +
        `?category=${searchParams.category}&limit=${
          Number(searchParams.limit) + 10
        }`
      }
    >
      <Image
        className={classNames(className, "h-20 w-auto")}
        src={config.moreIcon}
        alt="more icon"
        width={1000}
        height={1000}
      />
    </Link>
  );
};

export default MoreIcon;
