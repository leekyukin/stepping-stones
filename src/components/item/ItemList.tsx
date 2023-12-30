import { MENU, MENU_ARR } from "@/constants";
import { useGetItemList } from "@/hook/@queries/item";
import UseGetCategoryParam from "@/hook/UseGetCategoryParam";
import Loader from "../shared/Loader";
import ItemElement from "./ItemElement";

const ItemList = () => {
  const [category] = UseGetCategoryParam();

  const { data: itemList, isLoading } = useGetItemList({ category });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className="grid grid-cols-2 gap-5 gap-y-7 p-5 pt-16"
      style={{ backgroundColor: MENU[category].color }}
    >
      {itemList.map((item, idx) => (
        <ItemElement
          key={item.id}
          item={item}
          color={MENU_ARR[idx % itemList.length].color}
        />
      ))}
    </div>
  );
};

export default ItemList;
