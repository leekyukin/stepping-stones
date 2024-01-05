"use client";

import { CartItemType } from "@/@types/cartItem";
import { selectedCartItemListState } from "@/atom";
import OrderForm from "@/components/order/OrderForm";
import SelectedCartItemList from "@/components/order/SelectedCartItemList";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const OrderPage = () => {
  const router = useRouter();
  const selectedCartItemList = useRecoilValue(selectedCartItemListState);

  useEffect(() => {
    if (selectedCartItemList.length === 0) {
      router.back();
    }
  }, [router, selectedCartItemList.length]);

  const getTotalPrice = () => {
    let totalPrice = 0;
    selectedCartItemList.forEach(
      (cartItem: CartItemType) => (totalPrice += cartItem.item.price),
    );
    return totalPrice;
  };

  return (
    <div className="mt-36 flex flex-col items-center gap-5 p-5">
      <SelectedCartItemList selectedCartItemList={selectedCartItemList} />
      <OrderForm
        totalPrice={getTotalPrice()}
        submitDisable={selectedCartItemList.length === 0}
      />
    </div>
  );
};

export default OrderPage;
