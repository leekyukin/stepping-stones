import StoneIcon from "@/components/shared/icon/StoneIcon";
import Image from "next/image";
import ItemStones from "../shared/ItemStones";

interface ItemDetailProps {
  thumbnailImage: string;
  name: string;
  price: string;
  numberOfStones: number;
}

const ItemDetail = ({
  thumbnailImage,
  name,
  price,
  numberOfStones,
}: ItemDetailProps) => {
  return (
    <div className="grid gap-5">
      <div
        className="relative flex aspect-square items-center justify-center rounded-ee-[2.5rem] rounded-es-2xl rounded-se-2xl rounded-ss-[2.5rem] border-2 border-black p-10"
        style={{
          backgroundImage: `linear-gradient(#DD0000, white)`,
        }}
      >
        <Image
          className="h-full w-full object-contain"
          src={thumbnailImage}
          alt="item thumbnail image"
          width={1000}
          height={1000}
        />
        <div className="absolute left-5 top-5 flex h-16 w-16 items-center rounded-full border-2 border-black bg-point text-center font-semibold leading-5">
          Only One
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 rounded-ee-xl rounded-es-3xl rounded-se-3xl rounded-ss-xl bg-black py-3 text-white">
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm">KRW {price}</div>
      </div>
      <div className="flex h-10 gap-3">
        <div className="flex items-center rounded-lg bg-point px-3 text-sm font-semibold">
          One and only
        </div>
        <ItemStones numberOfStones={numberOfStones} />
      </div>
    </div>
  );
};

export default ItemDetail;
