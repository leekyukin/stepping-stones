import StoneIcon from "../shared/icon/StoneIcon";

const BuyNowButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md p-10">
      <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-point py-4 text-2xl font-semibold">
        <StoneIcon className="h-7" />
        Buy now
      </button>
    </div>
  );
};

export default BuyNowButton;
