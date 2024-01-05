import { CartItemType } from "@/@types/cartItem";
import ItemThumbnailImage from "../shared/ItemThumbnailImage";

const SelectedCartItemList = ({
  selectedCartItemList,
}: {
  selectedCartItemList: CartItemType[];
}) => {
  return (
    <div className="flex w-full rounded-3xl bg-gray p-5">
      <div className="grid h-full w-full grid-cols-3 gap-5">
        {selectedCartItemList.slice(0, 2).map((cartItem) => (
          <ItemThumbnailImage
            key={cartItem.id}
            image={cartItem.item.thumbnailImage}
            backgroundColor="#DD0088"
          />
        ))}
        {selectedCartItemList.length - 2 > 0 && (
          <p className="flex h-full w-full items-center justify-center text-3xl font-bold">
            +{selectedCartItemList.length - 2}
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectedCartItemList;
