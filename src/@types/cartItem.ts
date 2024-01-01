import { ItemType } from "./item";
import { UserType } from "./user";

export interface CartItemType {
  id: string;
  user: UserType;
  item: ItemType;
  createdAt: string;
}
