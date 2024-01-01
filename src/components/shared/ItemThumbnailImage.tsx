import Image from "next/image";

export interface ItemThumbnailImageProps {
  image: string;
  backgroundColor: string;
}

const ItemThumbnailImage = ({
  image,
  backgroundColor,
}: ItemThumbnailImageProps) => {
  return (
    <div
      className="relative flex aspect-square items-center justify-center rounded-ee-3xl rounded-es-lg rounded-se-lg rounded-ss-3xl border-2 border-black p-2"
      style={{
        backgroundImage: `linear-gradient(${backgroundColor}, white)`,
      }}
    >
      <Image
        className="h-full w-full object-contain"
        src={image}
        alt="item thumbnail image"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default ItemThumbnailImage;
