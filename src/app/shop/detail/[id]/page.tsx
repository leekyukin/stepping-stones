"use client";

import CouponButton from "@/components/itemDetail/CouponButton";
import ItemDetail from "@/components/itemDetail/ItemDetail";
import ItemImages from "@/components/itemDetail/ItemImages";
import DecorationBandMarquee from "@/components/shared/DecorationBand";
import Loader from "@/components/shared/Loader";
import { useGetItemDetail } from "@/hook/@queries/item";
import { useParams } from "next/navigation";

const ItemDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: item, isLoading } = useGetItemDetail(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-28 p-7">
      <ItemDetail
        thumbnailImage={item.thumbnailImage}
        name={item.name}
        price={item.price}
        numberOfStones={item.numberOfStones}
      />
      <hr className="my-10 border-[1.5px]" />
      <CouponButton />
      <DecorationBandMarquee />
      <ItemImages itemImages={item.itemImages} />
    </div>
  );
};

export default ItemDetailPage;
