import { CartItemType } from "./cartItem";
import { UserType } from "./user";

export interface OrderType {
  id: String;
  user: UserType;
  depositorName: string;
  bank: BankType;
  totalPrice: number;
  cartItemList: CartItemType[];
  status: OrderStatus;
  createdAt: string;
}

export type OrderStatus =
  | "BEGIN_CHECKOUT"
  | "PURCHASE"
  | "PREPARING"
  | "DELIVERING"
  | "DELIVERY_COMPLETED";

export type BankType =
  | "케이뱅크"
  | "기업은행"
  | "신한은행"
  | "KB국민은행"
  | "하나은행"
  | "NH농협은행"
  | "우리은행"
  | "대구은행"
  | "부산은행"
  | "광주은행"
  | "SC은행"
  | "경남은행"
  | "전북은행"
  | "수협은행";
