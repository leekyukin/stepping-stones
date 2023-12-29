"use client";

import Filter from "@/components/item/Filter";
import ItemList from "@/components/item/ItemList";
import config from "@/config";
import { MenuType } from "@/constants";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState<MenuType>("ALL");
  return (
    <div>
      <Image
        src={config.wallpaper}
        alt="wallpaper"
        width={1000}
        height={1000}
      />
      <Filter menu={menu} setMenu={setMenu} />
      <ItemList menu={menu} />
    </div>
  );
}
