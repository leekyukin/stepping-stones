import { PATH } from "@/constants";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import ItemStones from "../shared/ItemStones";
import ItemThumbnailImage from "../shared/ItemThumbnailImage";
import { useDeleteCartItem } from "@/hook/@queries/cartItem";

interface CartItemElementProps {
  id: string;
  itemId: string;
  thumbnailImage: string;
  name: string;
  price: number;
  numberOfStones: number;
}

const CartItemElement = ({
  id,
  itemId,
  thumbnailImage,
  name,
  price,
  numberOfStones,
}: CartItemElementProps) => {
  const { mutate: deleteCartItem } = useDeleteCartItem();

  const deleteButtonHandler = () => {
    const isOkayToDelete = confirm("카트에서 멋쟁이 옷을 삭제할겁네까?용?");
    if (isOkayToDelete) {
      deleteCartItem(id);
    }
  };

  return (
    <>
      <div className="mx-1 mb-2 flex items-center justify-between">
        <input type="checkbox" className="h-5 w-5" />
        <button onClick={deleteButtonHandler}>
          <IoCloseSharp className="text-2xl" />
        </button>
      </div>
      <Link
        href={PATH.ITEM_DETAIL + itemId}
        className="flex h-32 w-full gap-3 rounded-xl bg-white p-3"
      >
        <ItemThumbnailImage image={thumbnailImage} backgroundColor="#DD0000" />
        <div className="grid gap-1 p-1">
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs font-semibold">KRW {price}</div>
          <div>
            <ItemStones numberOfStones={numberOfStones} size="sm" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default CartItemElement;
