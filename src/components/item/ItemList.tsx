import { MENU, MENU_ARR, PATH } from "@/constants";
import { useGetItemList } from "@/hook/@queries/item";
import useGetItemSearchParams from "@/hook/useGetItemQueries";
import Link from "next/link";
import Loader from "../shared/Loader";
import MoreIcon from "../shared/icon/MoreIcon";
import ItemElement from "./ItemElement";

const ItemList = () => {
  const [searchParams] = useGetItemSearchParams();
  const { data: itemList, isLoading } = useGetItemList(searchParams);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className="flex w-full flex-col items-center justify-center py-16"
      style={{ backgroundColor: MENU[searchParams.category].color }}
    >
      <div className="grid w-full grid-cols-2 gap-5 gap-y-7 p-5">
        {itemList.map((item, idx) => (
          <Link href={PATH.ITEM_DETAIL + item.id} key={item.id}>
            <ItemElement
              thumbnailImage={item.thumbnailImage}
              name={item.name}
              price={item.price}
              status={item.status}
              color={MENU_ARR[idx % itemList.length].color}
            />
          </Link>
        ))}
      </div>

      <MoreIcon searchParams={searchParams} />
    </div>
  );
};

export default ItemList;
