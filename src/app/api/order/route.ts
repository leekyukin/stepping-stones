import { NextResponse } from "next/server";
import { CreateOrderRequest } from "../../../../backend/dto/order/orderRequest";
import orderRepository from "../../../../backend/repository/orderRepository";
import { getUserId } from "../../../../backend/utils/user";

export async function POST(req: Request) {
  const request: CreateOrderRequest = await req.json();
  const userId = await getUserId();

  if (!userId) {
    return NextResponse.json("존재하지 않는 유저입니다.", { status: 404 });
  }

  const isOrderDuplicate = await orderRepository.hasOrder(
    userId,
    request.depositorName,
    request.bank,
  );

  if (isOrderDuplicate) {
    return NextResponse.json("이미 존재하는 주문입니다.", { status: 409 });
  }

  await orderRepository.create(
    userId,
    request.totalPrice,
    request.depositorName,
    request.bank,
  );

  return NextResponse.json({ status: 200 });
}
