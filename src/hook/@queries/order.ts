import orderApi from "@/api/order";
import { useMutation } from "react-query";
import { CreateOrderRequest } from "../../../backend/dto/order/orderRequest";

function useCreateOrder() {
  const { mutate, isError, error, data } = useMutation(
    (request: CreateOrderRequest) => orderApi.createOrder(request),
  );

  return { mutate, isError, error, data };
}

export { useCreateOrder };
