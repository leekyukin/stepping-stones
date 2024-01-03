import { PATH } from "@/constants";
import { useRouter } from "next/navigation";
import StoneIcon from "../shared/icon/StoneIcon";
import classNames from "classnames";

const BuyNowButton = ({ disable }: { disable: boolean }) => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md p-10">
      <button
        className={classNames(
          "flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-2xl font-semibold",
          disable ? "border-2 bg-gray" : "bg-point",
        )}
        onClick={() => router.push(PATH.ORDER)}
        disabled={disable}
      >
        <StoneIcon className="h-7" />
        Buy now
      </button>
    </div>
  );
};

export default BuyNowButton;
