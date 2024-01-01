import { CartItemType } from "@/@types/cartItem";
import CartItemElement from "./CartItemElement";

interface CartItemListProps {
  cartItemList: CartItemType[];
}

const CartItemList = ({ cartItemList }: CartItemListProps) => {
  return (
    <>
      {cartItemList.length > 0 ? (
        cartItemList.map((cartItem: CartItemType) => (
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
        ))
      ) : (
        <p>상품을 장바구니에 츠 느으소</p>
      )}
    </>
  );
};

export default CartItemList;
