import { ItemSearchParamsType } from "@/@types/item";
import axios from "axios";

const itemApi = {
  endPoint: "/api/item/",

  getItemList: async (searchParams: ItemSearchParamsType) => {
    const { data } = await axios.get(itemApi.endPoint, {
      params: { ...searchParams },
    });

    return data;
  },

  getItemDetail: async (id: string) => {
    const { data } = await axios.get(itemApi.endPoint + id);

    return data;
  },
};

export default itemApi;
