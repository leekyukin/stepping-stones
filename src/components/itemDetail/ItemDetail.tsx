import StoneIcon from "@/components/shared/icon/StoneIcon";
import Image from "next/image";

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
          className="h-full w-auto"
          src={thumbnailImage}
          alt="item thumbnail image"
          width={1000}
          height={1000}
        />
        <div className="bg-point absolute left-5 top-5 flex h-16 w-16 items-center rounded-full border-2 border-black text-center font-semibold leading-5">
          Only One
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 rounded-ee-xl rounded-es-3xl rounded-se-3xl rounded-ss-xl bg-black py-3 text-white">
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm">KRW {price}</div>
      </div>
      <div className="flex h-10 gap-3">
        <div className="bg-point flex items-center rounded-lg px-3 font-semibold">
          One and only
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-kakaoYellow px-3 py-1.5 font-semibold">
          <StoneIcon className="h-6" /> {numberOfStones} Stone
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
