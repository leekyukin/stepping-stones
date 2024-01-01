import Image from "next/image";

const ItemImages = ({ itemImages }: { itemImages: string[] }) => {
  return (
    <>
      {itemImages.map((image) => (
        <div key={image}>
          <Image src={image} alt="item image" width={1000} height={1000} />
        </div>
      ))}
    </>
  );
};

export default ItemImages;
