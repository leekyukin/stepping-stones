import { CartItemType } from "@/@types/cartItem";
import ItemThumbnailImage from "../shared/ItemThumbnailImage";

const SelectedCartItemList = ({
  selectedCartItemList,
}: {
  selectedCartItemList: CartItemType[];
}) => {
  return (
    <div className="flex h-44 w-full items-center  rounded-3xl bg-gray p-8">
      <div className="flex h-full gap-5">
        {selectedCartItemList.slice(0, 2).map((cartItem) => (
          <ItemThumbnailImage
            key={cartItem.id}
            image={cartItem.item.thumbnailImage}
            backgroundColor="#DD0088"
          />
        ))}
        {selectedCartItemList.length - 2 > 0 && (
          <p className="ml-5 self-center text-3xl font-bold">
            +{selectedCartItemList.length - 2}
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectedCartItemList;
