import { ItemSearchParamsType } from "@/@types/item";
import itemApi from "@/api/item";
import { CACHE_KEY } from "@/constants/api";
import { useQuery } from "react-query";
import {
  ItemDetailResponse,
  ItemResponse,
} from "../../../backend/dto/item/itemResponse";

interface UseGetItemListReturn {
  data: ItemResponse[];
  isLoading: boolean;
}

function useGetItemList(
  searchParams: ItemSearchParamsType,
): UseGetItemListReturn {
  const { data, isLoading } = useQuery(
    [CACHE_KEY.ITEM_LIST, searchParams],
    () => itemApi.getItemList(searchParams),
  );

  return { data, isLoading };
}

interface UseGetItemDetailReturn {
  data: ItemDetailResponse;
  isLoading: boolean;
}

function useGetItemDetail(id: string): UseGetItemDetailReturn {
  const { data, isLoading } = useQuery([CACHE_KEY.ITEM_DETAIL, id], () =>
    itemApi.getItemDetail(id),
  );

  return { data, isLoading };
}

export { useGetItemDetail, useGetItemList };
