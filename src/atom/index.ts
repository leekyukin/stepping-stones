import { CartItemType } from "@/@types/cartItem";
import { atom } from "recoil";

export const selectedCartItemListState = atom<CartItemType[]>({
  key: "selectedCartItemList",
  default: [],
});
