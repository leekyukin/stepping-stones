import config from "@/config";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center bg-white">
      <Image
        className="h-40 animate-spin"
        src={config.loader}
        alt="loader"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Loader;
