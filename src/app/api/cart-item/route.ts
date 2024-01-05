import { NextResponse } from "next/server";
import { DeleteManyRequest } from "../../../../backend/dto/cartItem/cartItemRequest";
import { AddToCartRequest } from "../../../../backend/dto/item/itemRequest";
import cartItemRepository from "../../../../backend/repository/cartItemRepository";
import { getUserId } from "../../../../backend/utils/user";

export async function POST(req: Request) {
  const request: AddToCartRequest = await req.json();
  const itemId = request.itemId;
  const userId = await getUserId();

  if (!userId) {
    return NextResponse.json("존재하지 않는 유저입니다.", { status: 404 });
  }

  const isCartItemDuplicate = await cartItemRepository.isCartItemDuplicate(
    itemId,
    userId,
  );

  if (isCartItemDuplicate) {
    return NextResponse.json("이미 존재하는 아이템입니다.", { status: 409 });
  }

  const response = await cartItemRepository.create(itemId, userId);
  return NextResponse.json(response, { status: 200 });
}

export async function GET(req: Request) {
  const userId = await getUserId();

  if (!userId) {
    return NextResponse.json("존재하지 않는 유저입니다.", { status: 404 });
  }

  const cartItems = await cartItemRepository.findAll(userId);
  return NextResponse.json(cartItems, { status: 200 });
}

export async function DELETE(req: Request) {
  const request: DeleteManyRequest = await req.json();
  cartItemRepository.deleteAll(request.ids);
  return NextResponse.json({ status: 200 });
}
