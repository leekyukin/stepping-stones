"use client";

import { selectedCartItemListState } from "@/atom";
import OrderForm from "@/components/order/OrderForm";
import SelectedCartItemList from "@/components/order/SelectedCartItemList";
import { useRecoilValue } from "recoil";

const OrderPage = () => {
  const selectedCartItemList = useRecoilValue(selectedCartItemListState);
  return (
    <div className="mt-48 flex flex-col items-center gap-8 p-5">
      <SelectedCartItemList selectedCartItemList={selectedCartItemList} />
      <p className="text-xl font-bold">구매자 정보를 입력해주세요</p>
      <OrderForm submitDisable={selectedCartItemList.length === 0} />
    </div>
  );
};

export default OrderPage;
