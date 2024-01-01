"use client";

import { PATH } from "@/constants";
import { useCreateCartItem } from "@/hook/@queries/cartItem";
import { useRouter } from "next/navigation";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import StoneIcon from "../shared/icon/StoneIcon";

const CTAButtons = ({ itemId }: { itemId: string }) => {
  const router = useRouter();
  const { mutate: addToCart } = useCreateCartItem();

  const addToCartButtonHandler = () => {
    addToCart(itemId);
    console.log(itemId);
    router.push(PATH.CART);
  };

  return (
    <div className="max-auto fixed bottom-0 left-0 right-0 z-header mx-auto flex h-12 max-w-md font-semibold ">
      <button
        className="flex w-full items-center justify-center gap-2 rounded-se-xl rounded-ss-3xl border-2 border-b-0 border-r-[1px] border-black bg-white"
        onClick={addToCartButtonHandler}
      >
        <PiShoppingCartSimpleFill className="text-2xl" /> add to cart
      </button>
      <button className="flex w-full items-center justify-center gap-2 rounded-se-3xl rounded-ss-xl border-2 border-b-0 border-l-[1px] border-black bg-point">
        <StoneIcon className="h-5" />
        Buy now
      </button>
    </div>
  );
};
export default CTAButtons;
