import { Category, ItemStatus } from "@/@types/item";
import { Item } from "@prisma/client";
import { create } from "domain";

export interface ItemResponse {
  id: string;
  thumbnailImage: string;
  name: string;
  price: string;
  status: ItemStatus;
}

export const toItemResponse = (item: Item): ItemResponse => {
  const { price, ...data } = item;
  return {
    price: price.toLocaleString(),
    ...data,
  };
};

export interface ItemDetailResponse {
  id: string;
  name: string;
  description: string;
  thumbnailImage: string;
  itemImages: string[];
  category: string;
  numberOfStones: number;
  status: ItemStatus;
  createdAt: string;

  price: string;
  discountPrice: string;
  discountedPrice: string;
  discountRate: number;
}

export const toItemDetailResponse = (item: Item): ItemDetailResponse => {
  const { price, discountRate, createdAt, ...data } = item;
  const discountPrice = (price * discountRate) / 100;
  const discountedPrice = price - discountPrice;

  return {
    price: price.toLocaleString(),
    discountPrice: discountPrice.toLocaleString(),
    discountedPrice: discountedPrice.toLocaleString(),
    discountRate,
    createdAt: createdAt.toISOString(),
    ...data,
  };
};
