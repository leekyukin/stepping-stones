"use client";

import Filter from "@/components/item/Filter";
import ItemList from "@/components/item/ItemList";
import config from "@/config";
import Image from "next/image";

const ShopPage = () => {
  return (
    <div>
      <Image
        src={config.wallpaper}
        alt="wallpaper"
        width={1000}
        height={1000}
      />
      <Filter />
      <ItemList />
    </div>
  );
};

export default ShopPage;
