import cartItemApi from "@/api/cartItem";
import { CACHE_KEY } from "@/constants/api";
import { useMutation, useQuery, useQueryClient } from "react-query";

function useCreateCartItem() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (itemId: string) => cartItemApi.createCartItem(itemId),
    {
      onSuccess: () =>
        queryClient.invalidateQueries([CACHE_KEY.CART_ITEM_LIST]),
    },
  );

  return { mutate };
}

function useGetCartItemList() {
  const { data, isLoading } = useQuery([CACHE_KEY.CART_ITEM_LIST], () =>
    cartItemApi.getCartItemList(),
  );

  return { data, isLoading };
}

function useDeleteCartItem() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (id: string) => cartItemApi.deleteCartItem(id),
    {
      onSuccess: () =>
        queryClient.invalidateQueries([CACHE_KEY.CART_ITEM_LIST]),
    },
  );

  return { mutate };
}

export { useGetCartItemList, useCreateCartItem, useDeleteCartItem };
