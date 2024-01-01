import { CartItemType } from "@/@types/cartItem";
import CartItemElement from "./CartItemElement";

interface CartItemListProps {
  cartItemList: CartItemType[];
}

const CartItemList = ({ cartItemList }: CartItemListProps) => {
  return (
    <>
      {cartItemList.map((cartItem: CartItemType) => (
        <div key={cartItem.id}>
          <CartItemElement
            id={cartItem.id}
            itemId={cartItem.item.id}
            thumbnailImage={cartItem.item.thumbnailImage}
            name={cartItem.item.name}
            price={cartItem.item.price}
            numberOfStones={cartItem.item.numberOfStones}
          />
        </div>
      ))}
    </>
  );
};

export default CartItemList;
