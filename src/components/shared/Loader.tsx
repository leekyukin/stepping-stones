import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex w-full scale-150 items-center justify-center overflow-hidden">
      <Image
        className="h-full w-full animate-spin object-cover"
        src={"/assets/images/loader.jpeg"}
        alt="loader"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Loader;
