import ItemStones from "../shared/ItemStones";

interface ReceiptProps {
  totalPrice: number;
  totalDiscountPrice: number;
  totalDiscountedPrice: number;
  totalNumberOfStones: number;
}

const Receipt = ({
  totalPrice,
  totalDiscountPrice,
  totalDiscountedPrice,
  totalNumberOfStones,
}: ReceiptProps) => {
  return (
    <div className="mb-20 grid gap-2 rounded-2xl bg-white px-4 py-5">
      <div className="flex justify-between">
        <span className="font-semibold">Cost</span>
        <del className="font-semibold">₩ {totalPrice}</del>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Sale</span>
        <span className="font-semibold text-[#DD0000]">
          ₩ {totalDiscountPrice}
        </span>
      </div>

      <hr className="my-2 border-[1.5px] border-gray" />

      <div className="flex justify-between">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-xl font-semibold">₩ {totalDiscountedPrice}</span>
      </div>
      <ItemStones className="mt-5 w-32" numberOfStones={totalNumberOfStones} />
    </div>
  );
};

export default Receipt;
