import axios from "axios";
import { CreateOrderRequest } from "../../backend/dto/order/orderRequest";

const orderApi = {
  endPoint: "/api/order/",
  createOrder: async (request: CreateOrderRequest) => {
    const response = await axios.post(orderApi.endPoint, request);

    return response;
  },
};

export default orderApi;
