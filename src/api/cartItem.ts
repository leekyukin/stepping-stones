import axios from "axios";

const cartItemApi = {
  endPoint: "/api/cart-item/",

  createCartItem: async (itemId: string) => {
    const response = await axios.post(cartItemApi.endPoint, { itemId });

    return response;
  },

  getCartItemList: async () => {
    const { data } = await axios.get(cartItemApi.endPoint);

    return data;
  },

  deleteCartItem: async (id: string) => {
    const response = await axios.delete(cartItemApi.endPoint + id);

    return response;
  },

  // deleteCartItemList: async (ids: string[]) => {
  //   const response = await axios.delete(cartItemApi.endPoint, { ids });
  // },
};

export default cartItemApi;
