import { ItemSearchParamsType } from "@/@types/item";
import axios from "axios";

const itemApi = {
  endPoint: "/api/item/",

  getItemList: async (searchParams: ItemSearchParamsType) => {
    console.log("useQuery에서의 searchParams 값:", searchParams);
    const { data } = await axios.get(itemApi.endPoint, {
      params: { ...searchParams },
    });

    return data;
  },
};

export default itemApi;
