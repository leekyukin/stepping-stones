import { COLOR_ARR, MENU, MenuType } from "@/constants";
import ItemElement from "./ItemElement";

interface ItemListProps {
  menu: MenuType;
}

const ItemList = ({ menu }: ItemListProps) => {
  return (
    <div
      className="grid grid-cols-2 gap-5 gap-y-7 p-5 pt-16"
      style={{ backgroundColor: MENU[menu].color }}
    >
      {Array.from({ length: 20 }, (_, idx) => idx).map((idx) => (
        <ItemElement key={idx} color={COLOR_ARR[idx % COLOR_ARR.length]} />
      ))}
    </div>
  );
};

export default ItemList;
