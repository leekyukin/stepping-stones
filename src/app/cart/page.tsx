"use client";

import { CartItemType } from "@/@types/cartItem";
import { selectedCartItemListState } from "@/atom";
import BuyNowButton from "@/components/cart/BuyNowButton";
import CartItemList from "@/components/cart/CartItemList";
import Receipt from "@/components/cart/Receipt";
import Loader from "@/components/shared/Loader";
import { useGetCartItemList } from "@/hook/@queries/cartItem";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const CartPage = () => {
  const { data: cartItemList, isLoading } = useGetCartItemList();
  const [selectedCartItemList, setSelectedCartItemList] = useRecoilState(
    selectedCartItemListState,
  );

  useEffect(() => {
    if (cartItemList) {
      setSelectedCartItemList(cartItemList);
    }
  }, [cartItemList, setSelectedCartItemList]);

  const getTotalPrice = () => {
    let totalPrice = 0;
    selectedCartItemList.forEach(
      (cartItem: CartItemType) => (totalPrice += cartItem.item.price),
    );
    return totalPrice;
  };

  const getTotalNumberOfStones = () => {
    let totalNumberOfStones = 0;

    selectedCartItemList.forEach(
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
      <div className="h-full bg-gray px-6 py-10 accent-black">
        <CartItemList cartItemList={cartItemList} />
        <p className="mb-3 mt-10 text-lg font-semibold">
          {selectedCartItemList.length} item selected
        </p>
        <Receipt
          totalPrice={getTotalPrice()}
          totalDiscountPrice={100}
          totalDiscountedPrice={1010}
          totalNumberOfStones={getTotalNumberOfStones()}
        />
        <BuyNowButton disable={selectedCartItemList.length === 0} />
      </div>
    </div>
  );
};

export default CartPage;
