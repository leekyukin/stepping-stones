"use client";

import config from "@/config";
import { MENU_ARR, PATH } from "@/constants";
import useGetItemSearchParams from "@/hook/useGetItemQueries";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const Filter = () => {
  const [{ limit, category }] = useGetItemSearchParams();

  return (
    <div className="z-10 -mt-16 grid w-full grid-cols-5 items-end justify-center">
      {MENU_ARR.map((_menu) => (
        <div key={_menu.name}>
          <div className="shadow-2xl shadow-white">
            <Image
              className={classNames(
                "mx-auto mb-5 h-8 w-auto animate-spin shadow-white drop-shadow-2xl",
                category === _menu.name ? "block" : "hidden",
              )}
              src={config.stoneIcon}
              alt="stone"
              width={1000}
              height={1000}
            />
          </div>
          <Link href={PATH.SHOP + `?limit=${limit}&category=${_menu.name}`}>
            <div
              className="cursor-pointer rounded-t-xl py-3 text-center text-sm font-bold"
              style={{ backgroundColor: _menu.color }}
            >
              {_menu.name}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Filter;
