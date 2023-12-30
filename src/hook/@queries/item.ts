import { ItemSearchParamsType, ItemType } from "@/@types/item";
import itemApi from "@/api/item";
import { CACHE_KEY } from "@/constants/api";
import { useQuery } from "react-query";

interface useGetItemListReturn {
  data: ItemType[];
  isLoading: boolean;
}

function useGetItemList(
  searchParams: ItemSearchParamsType,
): useGetItemListReturn {
  const { data, isLoading } = useQuery(
    [CACHE_KEY.ITEM_LIST, searchParams],
    () => itemApi.getItemList(searchParams),
  );

  return { data, isLoading };
}

export { useGetItemList };
