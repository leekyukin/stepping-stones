import { CartItemType } from "@/@types/cartItem";
import CartItemElement from "./CartItemElement";

interface CartItemListProps {
  cartItemList: CartItemType[];
}

const CartItemList = ({ cartItemList }: CartItemListProps) => {
  return (
    <div className="grid gap-10">
      {cartItemList.length > 0 ? (
        cartItemList.map((cartItem: CartItemType) => (
          <CartItemElement key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <p>상품을 장바구니에 츠 느으소</p>
      )}
    </div>
  );
};

export default CartItemList;
