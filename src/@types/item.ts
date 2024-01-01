export interface ItemType {
  id: string;
  name: string;
  price: number;
  description: string;
  discountRate: number;
  thumbnailImage: string;
  itemImages: string[];
  category: Category;
  numberOfStones: number;
  status: ItemStatus;
  createdAt: string;
}

export type Category = "All" | "Top" | "Pants" | "Skirt" | "Acc";

export const CATEGORY_ARR = ["All", "Top", "Pants", "Skirt", "Acc"];

export type ItemStatus = "SOLD_OUT" | "SELLING" | "PREPARING";

export interface ItemSearchParamsType {
  q?: string;
  limit?: number;
  category: Category;
}
