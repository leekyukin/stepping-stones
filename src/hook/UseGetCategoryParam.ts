import { CATEGORY_ARR, Category } from "@/@types/item";
import { useSearchParams } from "next/navigation";

type UseGetCategoryParamReturn = [Category];

function UseGetCategoryParam(): UseGetCategoryParamReturn {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "All";

  if (!CATEGORY_ARR.includes(category)) {
    return ["All"];
  }

  return [category as Category];
}

export default UseGetCategoryParam;
