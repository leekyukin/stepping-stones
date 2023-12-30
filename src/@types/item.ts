export interface ItemType {
  id: string;
  name: string;
  price: number;
  description: string;
  discountRate: number;
  thumbnailImage: string;
  itemImages: string[];
  detailImages: string[];
  category: Category;
  subcategory: string;
  status: Status;
  createdAt: string;
}

export type Category = "All" | "Top" | "Pants" | "Skirt" | "Acc";

export const CATEGORY_ARR = ["All", "Top", "Pants", "Skirt", "Acc"];

export type Status = "SOLD_OUT" | "SELLING" | "PREPARING";

export interface ItemSearchParamsType {
  q?: string;
  limit?: number;
  category?: Category;
}
