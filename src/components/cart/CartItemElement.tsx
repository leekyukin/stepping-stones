import { CartItemType } from "@/@types/cartItem";
import { selectedCartItemListState } from "@/atom";
import { PATH } from "@/constants";
import { useDeleteCartItem } from "@/hook/@queries/cartItem";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { useRecoilState, useSetRecoilState } from "recoil";
import ItemStones from "../shared/ItemStones";
import ItemThumbnailImage from "../shared/ItemThumbnailImage";

interface CartItemElementProps {
  cartItem: CartItemType;
}

const CartItemElement = ({ cartItem }: CartItemElementProps) => {
  const [selectedCartItemList, setSelectedCartItemList] = useRecoilState(
    selectedCartItemListState,
  );
  const { mutate: deleteCartItem } = useDeleteCartItem();

  const deleteButtonHandler = () => {
    const isOkayToDelete = confirm("카트에서 멋쟁이 옷을 삭제할겁네까?용?");
    if (isOkayToDelete) {
      deleteCartItem(cartItem.id);
    }
  };

  const toggleCheckBox = () => {
    if (selectedCartItemList.includes(cartItem)) {
      setSelectedCartItemList((curr) =>
        curr.filter((_cartItem) => _cartItem !== cartItem),
      );
    } else {
      setSelectedCartItemList((curr) => [...curr, cartItem]);
    }
  };

  return (
    <div>
      <div className="mx-1 mb-2 flex items-center justify-between">
        <input
          type="checkbox"
          className="h-5 w-5"
          onChange={toggleCheckBox}
          checked={selectedCartItemList.includes(cartItem)}
        />
        <button onClick={deleteButtonHandler}>
          <IoCloseSharp className="text-2xl" />
        </button>
      </div>
      <Link
        href={PATH.ITEM_DETAIL + cartItem.item.id}
        className="flex h-32 w-full gap-3 rounded-xl bg-white p-3"
      >
        <ItemThumbnailImage
          image={cartItem.item.thumbnailImage}
          backgroundColor="#DD0000"
        />
        <div className="grid gap-1 p-1">
          <div className="text-sm font-semibold">{cartItem.item.name}</div>
          <div className="text-xs font-semibold">KRW {cartItem.item.price}</div>
          <div>
            <ItemStones
              numberOfStones={cartItem.item.numberOfStones}
              size="sm"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartItemElement;
