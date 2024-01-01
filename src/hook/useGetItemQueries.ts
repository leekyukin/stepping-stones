import { CATEGORY_ARR, Category, ItemSearchParamsType } from "@/@types/item";
import { useSearchParams } from "next/navigation";

type UseGetItemSearchParamsReturn = [ItemSearchParamsType];

function useGetItemSearchParams(): UseGetItemSearchParamsReturn {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "All";
  const limit = searchParams.get("limit") || "0";

  if (!CATEGORY_ARR.includes(category)) {
    return [
      {
        limit: Number(limit),
        category: "All",
      },
    ];
  }

  return [
    {
      limit: Number(limit),
      category: category as Category,
    },
  ];
}

export default useGetItemSearchParams;
