import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-modal mx-auto flex max-w-md items-center justify-center overflow-hidden border-2 border-point bg-white">
      <div className="h-auto w-full animate-spin overflow-hidden rounded-full">
        <Image
          className="h-full w-full"
          src={"/assets/images/loader.jpeg"}
          alt="loader"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Loader;
