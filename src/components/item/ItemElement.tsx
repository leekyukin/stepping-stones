import { ItemType } from "@/@types/item";
import Image from "next/image";

interface ItemElementProps {
  item: ItemType;
  color: string;
}

const ItemElement = ({ item, color }: ItemElementProps) => {
  return (
    <div>
      <div
        className="flex aspect-square flex-col items-center justify-end rounded-ee-[3rem] rounded-es-2xl rounded-se-2xl rounded-ss-[3rem] border-[1.5px] border-black p-5"
        style={{
          backgroundImage: `linear-gradient(${color}, white)`,
        }}
      >
        <Image
          className="h-full w-full object-contain"
          src={item.thumbnailImage}
          alt="thumbnail image"
          width={1000}
          height={1000}
        />
      </div>
      <div className="mt-2 flex flex-col items-center">
        <div className="text-xs font-bold">{item.name}</div>
        <div className="text-xs font-semibold">{item.price}</div>
      </div>
    </div>
  );
};

export default ItemElement;
