"use client";

import { CartItemType } from "@/@types/cartItem";
import BuyNowButton from "@/components/cart/BuyNowButton";
import CartItemList from "@/components/cart/CartItemList";
import Receipt from "@/components/cart/Receipt";
import Loader from "@/components/shared/Loader";
import { useGetCartItemList } from "@/hook/@queries/cartItem";

const CartPage = () => {
  const { data: cartItemList, isLoading } = useGetCartItemList();

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItemList.forEach(
      (cartItem: CartItemType) => (totalPrice += cartItem.item.price),
    );
    return totalPrice;
  };

  const getTotalNumberOfStones = () => {
    let totalNumberOfStones = 0;

    cartItemList.forEach(
      (cartItem: CartItemType) =>
        (totalNumberOfStones += cartItem.item.numberOfStones),
    );

    return totalNumberOfStones;
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-32">
      <div className="flex w-full justify-end px-10">
        <div className="rounded-t-2xl bg-gray px-7 pb-1 pt-3 text-xl font-semibold">
          Cart
        </div>
      </div>
      <div className="grid h-full gap-10 bg-gray px-4 py-10 accent-black">
        <CartItemList cartItemList={cartItemList} />
        <Receipt
          totalPrice={getTotalPrice()}
          totalDiscountPrice={100}
          totalDiscountedPrice={1010}
          totalNumberOfStones={getTotalNumberOfStones()}
        />
        <BuyNowButton />
      </div>
    </div>
  );
};

export default CartPage;
